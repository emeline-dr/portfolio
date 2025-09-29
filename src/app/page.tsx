import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/languageSwitcher";
import ModeSwitcher from "@/components/modeSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <div
        className="absolute top-[24] sm:top-[4] start-0 size-22 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "var(--logo-img)" }}
      />

      <h1 className="absolute h-[120] sm:h-[80] flex items-center font-cocomat font-bold text-xl sm:text-5xl text-accent-bg ms-[80px] top-0">
        EMELINE DE R.
      </h1>

      <ModeSwitcher />

      <LanguageSwitcher />

      <div className="mx-[24px] sm:mx-[80px] mt-[120] sm:mt-[80] mb-[80px] bg-foreground text-background p-[40px]">
        {t('greetings')}
      </div>
    </div>
  );
}

