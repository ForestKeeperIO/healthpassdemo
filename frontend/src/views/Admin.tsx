import { useTranslation } from 'react-i18next';
import { AdminStats } from '../components/AdminStats';

const Admin = () => {
  const { t } = useTranslation();

  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-white/5 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t('admin.title')}</p>
        <p className="mt-2 text-white/70">
          Real-time encrypted analytics for program operators. Only aggregated KPIs are shown—raw
          data remains private on participant devices.
        </p>
      </div>
      <AdminStats />
    </section>
  );
};

export default Admin;
