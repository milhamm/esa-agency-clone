"use client";

import { useLayoutEffect, useRef } from "react";

import { ImageSequence, Marquee } from "@/components/ui";

const END_SEQUENCE = 49;

export function SectionHero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageSequenceContainerRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   typeof window !== "undefined" && window.scrollTo({ top: 0 });
  // }, []);

  return (
    <section className="h-[200svh] w-full bg-black" ref={containerRef}>
      <div className="absolute inset-0 z-30 flex h-svh flex-col items-center justify-end overflow-hidden">
        <div className="container pb-16">
          <Marquee target={containerRef}>Overtake time with us</Marquee>
        </div>
      </div>
      <div
        className="sticky top-0 h-screen w-full"
        ref={imageSequenceContainerRef}
      >
        <ImageSequence
          target={containerRef}
          imageSequenceContainerTarget={imageSequenceContainerRef}
          src={(seq) => `/hero/hero-sequence${seq}.webp`}
          start={0}
          end={END_SEQUENCE}
          initialPlay
          initalPlayDuration={1000}
        />
      </div>
    </section>
  );
}
