import { useTranslation } from 'react-i18next';

const days = [
  { date: 'Mon', steps: 8120, sleep: '7h', readiness: 82 },
  { date: 'Tue', steps: 10540, sleep: '7.5h', readiness: 86 },
  { date: 'Wed', steps: 9540, sleep: '6.8h', readiness: 79 },
  { date: 'Thu', steps: 11300, sleep: '7.6h', readiness: 91 },
  { date: 'Fri', steps: 9800, sleep: '7.1h', readiness: 84 },
];

const Activity = () => {
  const { t } = useTranslation();

  return (
    <section className="rounded-3xl bg-white/5 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t('activity.title')}</p>
      <div className="mt-6 space-y-4">
        {days.map((day) => (
          <div key={day.date} className="flex flex-wrap items-center justify-between rounded-2xl bg-charcoal/60 p-4">
            <p className="text-lg font-semibold">{day.date}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span>{t('dashboard.stats.steps')}: {day.steps.toLocaleString()}</span>
              <span>{t('dashboard.stats.sleep')}: {day.sleep}</span>
              <span>{t('dashboard.stats.readiness')}: {day.readiness}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
