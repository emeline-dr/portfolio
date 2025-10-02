'use client';

import { useEffect, useRef, useState } from 'react';
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
    const [greetingsArray, setGreetingsArray] = useState<{ top: number, left: number }[]>([]);

    useEffect(() => {
        if (mainRef.current) {
            const parentWidth = mainRef.current.clientWidth;
            const parentHeight = mainRef.current.clientHeight;

            const divWidth = 150;
            const divHeight = 50;
            const positions: { top: number; left: number }[] = [];

            const isOverlapping = (top: number, left: number) => {
                return positions.some(pos =>
                    !(left + divWidth < pos.left ||
                        left > pos.left + divWidth ||
                        top + divHeight < pos.top ||
                        top > pos.top + divHeight)
                );
            };

            for (let i = 0; i < 15; i++) {
                let top, left;
                let attempts = 0;
                do {
                    top = Math.random() * (parentHeight - divHeight);
                    left = Math.random() * (parentWidth - divWidth);
                    attempts++;
                } while (isOverlapping(top, left) && attempts < 100);

                positions.push({ top, left });
            }

            setGreetingsArray(positions);
        }
    }, []);


    return (
        <div
            ref={mainRef}
            className="mainContain relative mx-[24px] sm:mx-[80px] mt-[120px] sm:mt-[80px] mb-[80px] bg-foreground text-background overflow-y-auto"
        >
            <div
                className="heroLeading p-[24px] flex items-end relative z-10"
                ref={heroRef}
            >
                <div className='sections mix-blend-hue absolute top-0 start-0 w-full bg-accent-bg z-0'></div>

                {greetingsArray.map((pos, index) => (
                    <div
                        key={index}
                        className='absolute text-accent-bg font-cocomat text-2xl font-bold italic tracking-widest opacity-50'
                        style={{ top: pos.top, left: pos.left }}
                        dangerouslySetInnerHTML={{ __html: props.greetings }}
                    />
                ))}

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
