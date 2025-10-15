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

    useEffect(() => {
        const scroller = mainRef.current;
        if (!scroller) return;

        ScrollTrigger.scrollerProxy(scroller, {
            scrollTop(value?: number) {
                if (typeof value === 'number') {
                    scroller.scrollTop = value;
                }
                return scroller.scrollTop;
            },
            getBoundingClientRect() {
                const widthFrame = window.innerWidth;
                let positionTop = 120;
                if (widthFrame >= 640) {
                    positionTop = 80;
                }
                return {
                    top: positionTop,
                    left: 0,
                    width: scroller.clientWidth,
                    height: scroller.clientHeight,
                };
            },
        });


        const panels = gsap.utils.toArray<HTMLElement>('.panel');
        const tops = panels.map(panel =>
            ScrollTrigger.create({
                trigger: panel,
                scroller,
                start: 'top top',
            })
        );

        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                scroller,
                start: () => panel.offsetHeight < scroller.clientHeight ? 'top top' : 'bottom bottom',
                pin: true,
                pinSpacing: false,
                pinType: 'transform',
            });
        });

        ScrollTrigger.create({
            scroller,
            snap: ({
                snapTo: (progress: number, self: ScrollTrigger) => {
                    const panelStarts = tops.map(st => st.start);
                    const snapScroll = gsap.utils.snap(panelStarts, self!.scroll());
                    return gsap.utils.normalize(0, ScrollTrigger.maxScroll(scroller), snapScroll);
                },
                duration: 0.5,
            } as any),
        });

        ScrollTrigger.refresh();

        const ro = new ResizeObserver(() => {
            ScrollTrigger.refresh();
        });
        ro.observe(scroller);
        panels.forEach(p => ro.observe(p));

        return () => {
            ro.disconnect();
            ScrollTrigger.getAll().forEach(t => t.kill());
            ScrollTrigger.scrollerProxy(scroller, {} as any);
        };
    }, []);

    return (
        <div
            className="mainContain relative mx-[24px] sm:mx-[80px] top-[120px] sm:top-[80px] mb-[80px] bg-foreground text-background overflow-y-auto overflow-x-hidden"
            ref={mainRef}
        >
            <section
                className="panel heroLeading p-[24px] flex items-end relative z-10"
            >
                {greetingsArray.map((pos, index) => (
                    <div
                        key={index}
                        className='absolute text-accent-bg font-cocomat text-2xl font-bold italic tracking-widest opacity-50'
                        style={{ top: pos.top, left: pos.left }}
                        dangerouslySetInnerHTML={{ __html: props.greetings }}
                    />
                ))}

                <TextLeading firstAdj={props.firstAdj} secondAdj={props.secondAdj} thirdAdj={props.thirdAdj} />
            </section>

            <section
                className="panel sections flex items-start justify-center bg-accent-bg text-white relative z-20"
            >
                {props.text}
            </section>
        </div>
    );
}
