import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({ locale, headers }) => {
  const supportedLocales = ['en', 'fr'];

  // Récupère la valeur du cookie
  const cookieStore = cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  // Détecte la langue du navigateur via Accept-Language
  const acceptLanguage = headers.get('accept-language') || '';
  const browserLocale = acceptLanguage.split(',')[0].split('-')[0]; // ex: "fr-FR" → "fr"

  const currentLocale =
    cookieLocale && supportedLocales.includes(cookieLocale)
      ? cookieLocale
      : supportedLocales.includes(browserLocale)
        ? browserLocale
        : locale || 'en'; // fallback si aucune correspondance

  return {
    locale: currentLocale,
    messages: (await import(`../../locales/${currentLocale}.json`)).default,
  };
});
