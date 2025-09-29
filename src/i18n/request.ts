import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({ locale }) => {
  const supportedLocales = ['en', 'fr'];

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  const currentLocale =
    cookieLocale && supportedLocales.includes(cookieLocale)
      ? cookieLocale
      : locale || 'en';

  return {
    locale: currentLocale,
    messages: (await import(`../../locales/${currentLocale}.json`)).default,
  };
});
