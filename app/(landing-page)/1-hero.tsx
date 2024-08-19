"use client";

import { useLayoutEffect, useRef } from "react";

import { ImageSequence, Marquee } from "@/components/ui";

const END_SEQUENCE = 49;

export function SectionHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   typeof window !== "undefined" && window.scrollTo({ top: 0 });
  // }, []);

  return (
    <div className="h-[200svh] w-full bg-black" ref={containerRef}>
      <div className="absolute inset-0 z-30 flex h-svh flex-col items-center justify-end overflow-hidden">
        <div className="container pb-16">
          <Marquee>Overtake time with us</Marquee>
        </div>
      </div>
      <div className="fixed top-0 h-screen w-full">
        <ImageSequence
          target={containerRef}
          src={(seq) => `/hero/hero-sequence${seq}.webp`}
          start={0}
          end={END_SEQUENCE}
          initialPlay
          initalPlayDuration={1000}
        />
      </div>
    </div>
  );
}
