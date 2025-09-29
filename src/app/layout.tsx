import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

async function getMessages(locale: string) {
  try {
    return (await import(`../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const metadata: Metadata = {
  title: "Emeline DR",
  description: "Portfolio d'Emeline De Roo",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "fr";

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
