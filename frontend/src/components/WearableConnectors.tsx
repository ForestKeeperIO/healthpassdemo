import { useTranslation } from 'react-i18next';
import { useWearables } from '../hooks/useWearables';
import { CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const providers = [
  { key: 'googleFit', color: 'from-emerald to-midnight-500' },
  { key: 'appleHealth', color: 'from-coral to-lilac' },
  { key: 'fitbit', color: 'from-midnight-400 to-midnight-600' },
] as const;

export const WearableConnectors = () => {
  const { t } = useTranslation();
  const { state, connect, loading } = useWearables();

  return (
    <div className="rounded-3xl bg-white/5 p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-lilac">APIs</p>
          <h3 className="text-xl font-semibold">{t('wearables.title')}</h3>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {providers.map((provider) => {
          const connected = state[provider.key];
          return (
            <button
              key={provider.key}
              disabled={connected}
              onClick={() => connect(provider.key)}
              className={`rounded-2xl bg-gradient-to-br ${provider.color} p-4 text-left transition-opacity ${
                connected ? 'opacity-60' : 'hover:opacity-90'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{t(`wearables.${provider.key}`)}</span>
                {connected ? (
                  <CheckCircleIcon className="h-6 w-6 text-emerald" />
                ) : (
                  <ArrowPathIcon className="h-6 w-6 animate-spin text-white/70" hidden={!loading} />
                )}
              </div>
              <p className="text-sm text-white/80">
                {connected ? t('wearables.connected') : t('wearables.connect')}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
