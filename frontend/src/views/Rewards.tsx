import { useTranslation } from 'react-i18next';
import { RewardCard } from '../components/RewardCard';
import { useProofFlow } from '../hooks/useProofFlow';

const allRewards = [
  { id: 'streak', title: 'Consistency Streak', description: 'Complete five verified syncs', unlocked: true },
  { id: 'steps', title: 'Step Hero', description: 'Walk 70k steps in a week', unlocked: false },
  { id: 'sleep', title: 'Sleep Guardian', description: '7h+ sleep for 10 nights', unlocked: false },
];

const Rewards = () => {
  const { t } = useTranslation();
  const { canClaim } = useProofFlow();

  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/5 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t('rewards.title')}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {allRewards.map((reward) => (
            <RewardCard key={reward.id} {...reward} unlocked={reward.unlocked || canClaim} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
