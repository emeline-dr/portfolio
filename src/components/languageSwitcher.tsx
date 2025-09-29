'use client';

import "flag-icons/css/flag-icons.min.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    const [cookieLocale, setCookieLocale] = useState<string | undefined>();

    useEffect(() => {
        setCookieLocale(Cookies.get("NEXT_LOCALE"));
        if (!Cookies.get("NEXT_LOCALE")) {
            Cookies.set("NEXT_LOCALE", 'en', { path: "/", expires: 365 });
            setCookieLocale(Cookies.get("NEXT_LOCALE"));
        }
    }, []);

    const switchLanguage = (lang: "en" | "fr") => {
        Cookies.set("NEXT_LOCALE", lang, { path: "/", expires: 365 });
        window.location.reload();
    };

    return (
        <div className="absolute flex-col sm:flex-row flex justify-evenly sm:content-center h-[120] sm:h-[80] end-[80] top-0">
            <button
                onClick={() => switchLanguage("en")}
                className={`h-[24] self-center sm:mr-[16] ${cookieLocale === "en" ? "cursor-not-allowed grayscale-[85%]" : "opacity-25 transition hover:opacity-100 cursor-pointer"
                    }`}
                disabled={cookieLocale === "en"}
            >
                <span className="fi fi-gb fis h-[24] rounded-sm outline outline-foreground outline-1"></span>
            </button>
            <button
                onClick={() => switchLanguage("fr")}
                className={`h-[24] self-center ${cookieLocale === "fr" ? "cursor-not-allowed grayscale-[85%]" : "opacity-25 transition hover:opacity-100 cursor-pointer"
                    }`}
                disabled={cookieLocale === "fr"}
            >
                <span className="fi fi-fr fis h-[24] rounded-sm outline outline-foreground outline-1"></span>
            </button>
        </div>
    );
}
