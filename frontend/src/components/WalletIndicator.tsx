import { WalletIcon } from '@heroicons/react/24/outline';
import { useWallet } from '../hooks/useWallet';

const labels: Record<string, string> = {
  lace: 'Lace',
  midnight: 'Midnight In-App',
};

export const WalletIndicator = () => {
  const { wallet } = useWallet();

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
      <WalletIcon className="h-4 w-4" />
      {wallet ? labels[wallet] : 'No wallet'}
    </div>
  );
};
