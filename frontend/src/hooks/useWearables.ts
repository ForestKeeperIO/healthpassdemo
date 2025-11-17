import localforage from 'localforage';
import { useEffect, useState } from 'react';

type WearableProvider = 'googleFit' | 'appleHealth' | 'fitbit';

type WearableState = Record<WearableProvider, boolean>;

const STORAGE_KEY = 'healthpass.wearables';

const defaultState: WearableState = {
  googleFit: false,
  appleHealth: false,
  fitbit: false,
};

export const useWearables = () => {
  const [state, setState] = useState<WearableState>(defaultState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localforage
      .getItem<WearableState>(STORAGE_KEY)
      .then((value) => setState(value ?? defaultState))
      .finally(() => setLoading(false));
  }, []);

  const connect = async (provider: WearableProvider) => {
    const next = { ...state, [provider]: true };
    setState(next);
    await localforage.setItem(STORAGE_KEY, next);
  };

  return { state, loading, connect };
};
