import { useWallet } from '../hooks/useWallet';
import { WalletIcon } from '@heroicons/react/24/outline';

const wallets = [
  { id: 'lace', title: 'Lace', description: 'Cardano light wallet' },
  { id: 'midnight', title: 'Midnight Wallet', description: 'In-app zk wallet' },
] as const;

export const WalletSelector = () => {
  const { wallet, connect } = useWallet();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {wallets.map((w) => (
        <button
          key={w.id}
          onClick={() => connect(w.id as 'lace' | 'midnight')}
          className={`rounded-2xl border border-white/10 p-4 text-left transition-all ${
            wallet === w.id ? 'border-emerald bg-emerald/10' : 'hover:border-white/30'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/10 p-2">
              <WalletIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold">{w.title}</p>
              <p className="text-sm text-white/70">{w.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
