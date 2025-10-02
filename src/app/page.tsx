import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/languageSwitcher";
import ModeSwitcher from "@/components/modeSwitcher";
import HeroWithScrollAnimation from '@/components/HeroWithScrollAnimation';

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <div
        className="absolute top-[24] sm:top-[4] start-0 size-22 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "var(--logo-img)" }}
      />

      <h1 className="absolute h-[120px] sm:h-[80px] flex items-center font-cocomat font-bold text-xl sm:text-5xl text-accent-bg ml-[80px] top-0">
        EMELINE DE R.
      </h1>

      <ModeSwitcher />
      <LanguageSwitcher />

      <HeroWithScrollAnimation
        greetings={t('greetings')}
        firstAdj={t('firstAdjective')}
        secondAdj={t('secondAdjective')}
        thirdAdj={t('thirdAdjective')}
        text={t('text')}
      />
    </div>
  );
}
