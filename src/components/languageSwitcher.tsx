'use client';
import "flag-icons/css/flag-icons.min.css";

export default function LanguageSwitcher() {
    const switchLanguage = (lang: 'en' | 'fr') => {
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
        window.location.reload();
    };

    return (
        <div className="absolute end-[80] top-0">
            <button onClick={() => switchLanguage('en')}><span className="fi fi-gb h-[48] leading-[1.2]"></span></button>
            <button onClick={() => switchLanguage('fr')}><span className="fi fi-fr h-[48] leading-[1.2]"></span></button>
        </div>
    );
}
