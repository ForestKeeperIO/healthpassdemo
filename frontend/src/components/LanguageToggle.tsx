import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const languages = ['en', 'es'] as const;

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs">
      {languages.map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          className={
            'rounded-full px-2 py-0.5 ' +
            (i18n.language.startsWith(lng)
              ? 'bg-emerald/20 text-emerald'
              : 'text-white/70 hover:text-white')
          }
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
