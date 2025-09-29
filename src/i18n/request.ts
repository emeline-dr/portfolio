import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({ locale }) => {
  const supportedLocales = ['en', 'fr'];
  const cookieStore = await cookies();
  let cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  if (!cookieLocale) {
    // Si cookie absent, on utilise le navigateur et on le définit côté serveur
    cookieLocale = locale?.startsWith('fr') ? 'fr' : 'en';
    cookieStore.set('NEXT_LOCALE', cookieLocale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  }

  const currentLocale =
    cookieLocale && supportedLocales.includes(cookieLocale)
      ? cookieLocale
      : 'en';

  return {
    locale: currentLocale,
    messages: (await import(`../../locales/${currentLocale}.json`)).default,
  };
});
