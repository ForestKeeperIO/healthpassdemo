import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../components/LanguageToggle';
import { WalletSelector } from '../components/WalletSelector';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white/5 p-6">
        <h3 className="text-xl font-semibold">{t('settings.language')}</h3>
        <p className="text-sm text-white/60">Switch between English and Spanish.</p>
        <div className="mt-3">
          <LanguageToggle />
        </div>
      </section>
      <section className="rounded-3xl bg-white/5 p-6">
        <h3 className="text-xl font-semibold">{t('settings.wallet')}</h3>
        <p className="text-sm text-white/60">Manage wallet connections.</p>
        <div className="mt-4">
          <WalletSelector />
        </div>
      </section>
      <section className="rounded-3xl bg-white/5 p-6">
        <h3 className="text-xl font-semibold">{t('settings.notifications')}</h3>
        <div className="mt-4 space-y-3 text-sm text-white/70">
          <label className="flex items-center justify-between rounded-2xl border border-white/10 p-3">
            <span>Push alerts</span>
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-white/10 p-3">
            <span>Email digests</span>
            <input type="checkbox" className="h-4 w-4" />
          </label>
        </div>
      </section>
    </div>
  );
};

export default Settings;
