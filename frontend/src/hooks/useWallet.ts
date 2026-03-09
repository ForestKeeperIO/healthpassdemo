import { useSyncExternalStore } from 'react';
import { walletStore } from '../lib/wallet-store';

type WalletProvider = 'lace' | 'midnight';

export const useWallet = () => {
  const wallet = useSyncExternalStore(walletStore.subscribe, walletStore.getSnapshot, walletStore.getSnapshot);

  const connect = (provider: WalletProvider) => {
    walletStore.setWallet(provider);
  };

  return { wallet, connect };
};
