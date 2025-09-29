import Image from "next/image";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/languageSwitcher";
import ModeSwitcher from "@/components/modeSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <h1 className="absolute font-cocomat font-bold text-5xl/[1.4] text-accent-bg ms-[80px] top-0">
        EMELINE DE R.
      </h1>

      <ModeSwitcher />

      <LanguageSwitcher />

      <div
        className="absolute top-0 start-0 size-22 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "var(--logo-img)" }}
      />

      <div className="m-[80px] bg-foreground text-background p-[40px]">
        {t('greetings')}
      </div>
    </div>
  );
}

