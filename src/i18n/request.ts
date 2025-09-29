import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({ locale }) => {
  const supportedLocales = ['en', 'fr'];

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  const currentLocale =
    cookieLocale && supportedLocales.includes(cookieLocale)
      ? cookieLocale
      : locale || cookieStore.set("NEXT_LOCALE", 'en', { path: "/", expires: 365 });

  return {
    locale: currentLocale,
    messages: (await import(`../../locales/${currentLocale}.json`)).default,
  };
});
