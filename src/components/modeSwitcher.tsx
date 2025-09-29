'use client'
import { Tooltip } from "@heroui/tooltip";
import { useState, useEffect } from "react";

export default function ModeSwitcher() {
    const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'auto') {
            root.classList.remove('light', 'dark');
        } else {
            root.classList.remove('light', 'dark');
            root.classList.add(theme);
        }
    }, [theme]);

    return (
        <div className="absolute end-[24] top-[80] h-[104] w-[40] rounded-sm bg-foreground flex flex-col justify-evenly items-center">
            <button onClick={() => setTheme('light')}>
                <Tooltip
                    key="left"
                    classNames={{
                        content: ["px-[8] text-foreground bg-accent-fg rounded-sm"]
                    }}
                    content="Light"
                    placement="left">
                    <svg className="p-[2] text-accent-fg cursor-pointer transition duration-300 ease-in-out hover:bg-accent-fg hover:text-foreground rounded-sm" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1" /><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0" /></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1" opacity="0"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0" /><set fill="freeze" attributeName="opacity" begin="0.6s" to="1" /><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5" opacity="0"><animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0" /><set fill="freeze" attributeName="opacity" begin="0.8s" to="1" /><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></g></svg>
                </Tooltip>
            </button>

            <button onClick={() => setTheme('dark')}>
                <Tooltip key="left"
                    classNames={{
                        content: ["px-[8] text-foreground bg-accent-fg rounded-sm"]
                    }}
                    content="Dark"
                    placement="left">
                    <svg className="p-[2] text-accent-fg cursor-pointer transition duration-300 ease-in-out hover:bg-accent-fg hover:text-foreground rounded-sm" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><animate id="SVGjUNXVaqx" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;SVGjUNXVaqx.begin+6s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGjUNXVaqx.begin+2s;SVGjUNXVaqx.begin+4s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGjUNXVaqx.begin+1.2s;SVGjUNXVaqx.begin+3.2s;SVGjUNXVaqx.begin+5.2s" dur="0.4s" values="0;4" /><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5" /><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5" /><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5" /></path><path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><animate id="SVGO88gQckN" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;SVGO88gQckN.begin+6s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGO88gQckN.begin+2s;SVGO88gQckN.begin+4s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGO88gQckN.begin+1.2s;SVGO88gQckN.begin+3.2s;SVGO88gQckN.begin+5.2s" dur="0.4s" values="0;4" /><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5" /><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5" /><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5" /></path><path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><animate id="SVGPXuakc7A" fill="freeze" attributeName="stroke-dashoffset" begin="2s;SVGPXuakc7A.begin+6s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGPXuakc7A.begin+2s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGPXuakc7A.begin+1.2s;SVGPXuakc7A.begin+3.2s" dur="0.4s" values="0;4" /><set fill="freeze" attributeName="d" begin="SVGPXuakc7A.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5" /><set fill="freeze" attributeName="d" begin="SVGPXuakc7A.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5" /></path></g><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><animateMotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22" /></path></svg>
                </Tooltip>
            </button>

            <button onClick={() => setTheme('auto')}>
                <Tooltip key="left"
                    classNames={{
                        content: ["px-[8] text-foreground bg-accent-fg rounded-sm"]
                    }}
                    content="Auto"
                    placement="left">
                    <svg className="p-[2] text-accent-fg cursor-pointer transition duration-300 ease-in-out hover:bg-accent-fg hover:text-foreground rounded-sm" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.25 3.784a8.25 8.25 0 0 0 0 16.432zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" /></svg>
                </Tooltip>
            </button>
        </div>
    )
}