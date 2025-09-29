'use client';

import "flag-icons/css/flag-icons.min.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    const [cookieLocale, setCookieLocale] = useState<string | undefined>();

    useEffect(() => {
        const localeCookie = Cookies.get("NEXT_LOCALE");
        if (localeCookie) {
            setCookieLocale(localeCookie);
        } else {
            const browserLang = navigator.language.startsWith("fr") ? "fr" : "en";
            setCookieLocale(browserLang);
            Cookies.set("NEXT_LOCALE", browserLang, { path: "/", expires: 365 });
        }
    }, []);

    const switchLanguage = (lang: "en" | "fr") => {
        Cookies.set("NEXT_LOCALE", lang, { path: "/", expires: 365 });
        window.location.reload();
    };

    return (
        <div className="absolute flex content-center h-[80] end-[80] top-0">
            <button
                onClick={() => switchLanguage("en")}
                className={`h-[24] self-center me-[16] ${cookieLocale === "en" ? "opacity-25 cursor-not-allowed" : "cursor-pointer"
                    }`}
                disabled={cookieLocale === "en"}
            >
                <span className="fi fi-gb fis h-[24] rounded-sm"></span>
            </button>
            <button
                onClick={() => switchLanguage("fr")}
                className={`h-[24] self-center ${cookieLocale === "fr" ? "opacity-25 cursor-not-allowed" : "cursor-pointer"
                    }`}
                disabled={cookieLocale === "fr"}
            >
                <span className="fi fi-fr fis h-[24] rounded-sm"></span>
            </button>
        </div>
    );
}
