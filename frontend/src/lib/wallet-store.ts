const WALLET_KEY = 'healthpass.wallet';

const listeners = new Set<() => void>();

export const walletStore = {
  getSnapshot: () => window.localStorage.getItem(WALLET_KEY) as 'lace' | 'midnight' | null,
  setWallet: (wallet: 'lace' | 'midnight') => {
    window.localStorage.setItem(WALLET_KEY, wallet);
    listeners.forEach((listener) => listener());
  },
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};
