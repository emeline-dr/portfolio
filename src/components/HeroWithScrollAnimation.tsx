'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextLeading from '@/components/textLeading';

gsap.registerPlugin(ScrollTrigger);

type ScrollsProps = {
    greetings: string,
    firstAdj: string,
    secondAdj: string,
    thirdAdj: string,
    text: string,
}

export default function HeroWithScrollAnimation(props: ScrollsProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={mainRef}
            className="mainContain relative mx-[24px] sm:mx-[80px] mt-[120px] sm:mt-[80px] mb-[80px] bg-foreground text-background overflow-y-auto"
        >
            <div
                className="heroLeading p-[24px] flex items-end relative z-10"
                ref={heroRef}
            >
                <div
                    className='absolute top-[8px] right-[8px] text-accent-bg font-cocomat text-2xl font-bold italic tracking-widest opacity-50'
                    dangerouslySetInnerHTML={{ __html: props.greetings }}
                />
                <TextLeading firstAdj={props.firstAdj} secondAdj={props.secondAdj} thirdAdj={props.thirdAdj} />
            </div>

            <div
                className="sections flex items-start justify-center bg-accent-bg text-white relative z-20"
                ref={sectionRef}
            >
                {props.text}
            </div>
        </div>
    );
}
