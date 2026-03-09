import { Link, Outlet, useLocation } from '@tanstack/react-router';
import { Toaster } from 'react-hot-toast';
import { LanguageToggle } from '../components/LanguageToggle';
import { useTranslation } from 'react-i18next';
import { WalletIndicator } from '../components/WalletIndicator';

const navItems = [
  { to: '/', key: 'nav.onboarding' },
  { to: '/dashboard', key: 'nav.dashboard' },
  { to: '/activity', key: 'nav.activity' },
  { to: '/rewards', key: 'nav.rewards' },
  { to: '/settings', key: 'nav.settings' },
  { to: '/admin', key: 'nav.admin' },
];

export const MainLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <header className="flex flex-col gap-4 border-b border-white/10 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-lilac">Midnight</p>
          <h1 className="text-2xl font-semibold">HealthPass</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <WalletIndicator />
          <LanguageToggle />
        </div>
      </header>
      <nav className="flex flex-wrap gap-3 border-b border-white/5 px-6 py-3 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.to}
            className={location.pathname === item.to ? 'text-emerald font-semibold' : 'text-white/60 hover:text-white'}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>
      <main className="px-6 py-8">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};
