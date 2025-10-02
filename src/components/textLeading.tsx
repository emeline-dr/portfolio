'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, SplitText);

type localesTextProps = {
    firstAdj: string;
    secondAdj: string;
    thirdAdj: string;
}

export default function TextLeading(props: localesTextProps) {
    const container = useRef<HTMLDivElement>(null!);

    useGSAP(() => {
        const spans = gsap.utils.toArray(container.current.querySelectorAll("span")) as HTMLElement[];

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

        spans.forEach((span) => {
            const split = new SplitText(span, { type: "chars" });

            tl.from(split.chars, {
                autoAlpha: 0,
                duration: 0.75,
                stagger: 0.15,
                ease: "power2.out"
            });

            tl.to(span, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power2.inOut",
                delay: 1
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="h-[140px] container relative font-cocomat">
            <span className='textHero absolute w-full text-right top-0 start-0 text-9xl font-black'>{props.firstAdj}</span>
            <span className='textHero absolute w-full text-right top-0 start-0 text-9xl font-black'>{props.secondAdj}</span>
            <span className='textHero absolute w-full text-right top-0 start-0 text-9xl font-black'>{props.thirdAdj}</span>
        </div>
    );
}