import { useTranslation } from 'react-i18next';
import { WalletSelector } from '../components/WalletSelector';
import { WearableConnectors } from '../components/WearableConnectors';
import { Link } from '@tanstack/react-router';

const Onboarding = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-midnight-500 to-charcoal p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t('nav.onboarding')}</p>
        <h2 className="mb-4 text-4xl font-semibold">{t('onboarding.title')}</h2>
        <p className="max-w-3xl text-lg text-white/80">{t('onboarding.subtitle')}</p>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold">{t('onboarding.connectWallet')}</h3>
            <WalletSelector />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">{t('onboarding.connectWearable')}</h3>
            <WearableConnectors />
          </div>
        </div>
        <Link
          to="/dashboard"
          className="mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-semibold text-charcoal"
        >
          {t('onboarding.cta')}
        </Link>
      </section>
    </div>
  );
};

export default Onboarding;
