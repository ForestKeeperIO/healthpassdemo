import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { midnightApi, RewardUnlockedPayload } from '../api/midnight';
import { useTranslation } from 'react-i18next';

export const useProofFlow = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [reward, setReward] = useState<RewardUnlockedPayload | null>(null);
  const [lastProofId, setLastProofId] = useState<string | null>(null);

  useEffect(() => {
    const handler = (payload: RewardUnlockedPayload) => {
      setReward(payload);
      toast.success(t('toasts.rewardUnlocked'));
    };
    midnightApi.on('RewardUnlocked', handler);
    return () => midnightApi.off('RewardUnlocked', handler);
  }, [t]);

  const submit = async () => {
    setStatus('pending');
    try {
      const { proofId } = await midnightApi.submitProof({ activityHash: crypto.randomUUID() });
      setLastProofId(proofId);
      setStatus('success');
      toast.success(t('toasts.proofSuccess'));
    } catch (error) {
      console.error(error);
      setStatus('error');
      toast.error(t('toasts.proofFailed'));
    }
  };

  const canClaim = useMemo(() => status === 'success' && !!lastProofId, [status, lastProofId]);

  return { status, submit, reward, canClaim };
};
