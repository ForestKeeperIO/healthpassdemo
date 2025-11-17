import { useTranslation } from 'react-i18next';
import { StatsCard } from '../components/StatsCard';
import { BoltIcon, HeartIcon, MoonIcon } from '@heroicons/react/24/outline';
import { WearableConnectors } from '../components/WearableConnectors';
import { useProofFlow } from '../hooks/useProofFlow';

const stats = [
  {
    titleKey: 'dashboard.stats.steps',
    value: '8,540',
    trend: '+12% week over week',
    icon: <BoltIcon className="h-5 w-5" />,
  },
  {
    titleKey: 'dashboard.stats.sleep',
    value: '7.2h',
    trend: '+18 min avg',
    icon: <MoonIcon className="h-5 w-5" />,
  },
  {
    titleKey: 'dashboard.stats.readiness',
    value: '83',
    trend: 'Optimal',
    icon: <HeartIcon className="h-5 w-5" />,
  },
];

const Dashboard = () => {
  const { t } = useTranslation();
  const { status, submit, reward, canClaim } = useProofFlow();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-midnight-600 to-charcoal p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t('nav.dashboard')}</p>
            <h2 className="text-4xl font-semibold">{t('dashboard.welcome', { name: 'Alicia' })}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={submit}
              disabled={status === 'pending'}
              className="inline-flex items-center gap-2 rounded-full bg-lilac px-5 py-3 font-semibold text-charcoal disabled:opacity-50"
            >
              {status === 'pending' && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-charcoal border-t-transparent" />
              )}
              {t('dashboard.sync')}
            </button>
            <button
              disabled={!canClaim}
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition disabled:opacity-40"
            >
              {canClaim ? t('dashboard.claim') : t('dashboard.claimLocked')}
            </button>
          </div>
        </div>
        {status === 'pending' && <p className="mt-4 text-sm text-white/70">{t('dashboard.syncing')}</p>}
        {status === 'success' && (
          <p className="mt-4 text-sm text-emerald">{t('dashboard.synced')}</p>
        )}
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {stats.map((item) => (
          <StatsCard
            key={item.titleKey}
            title={t(item.titleKey)}
            value={item.value}
            trend={item.trend}
            icon={item.icon}
          />
        ))}
      </section>

      <WearableConnectors />

      {reward && (
        <div className="rounded-3xl border border-emerald/40 bg-emerald/10 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald">Reward unlocked</p>
          <h3 className="text-2xl font-semibold">{reward.title}</h3>
          <p className="text-white/70">{reward.description}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
