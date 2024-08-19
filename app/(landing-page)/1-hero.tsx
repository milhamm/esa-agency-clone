"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  transform,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const END_SEQUENCE = 49;

export function SectionHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [sequence, setSequence] = useState(1);

  useLayoutEffect(() => {
    typeof window !== "undefined" && window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const duration = 1000;
    const start = performance.now();
    const transformer = transform([0, 1], [1, END_SEQUENCE]);

    const animate = () => {
      const now = performance.now();
      const delta = Math.min((now - start) / duration, 1);
      setSequence(Math.floor(transformer(delta)));
      if (delta < 1) requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  const imgIdx = useTransform(scrollYProgress, [0, 1], [END_SEQUENCE, 1]);

  useMotionValueEvent(imgIdx, "change", (latest) => {
    setSequence(Math.floor(latest));
  });

  return (
    <div className="h-[200svh] w-full bg-black" ref={containerRef}>
      <div className="absolute inset-0 z-30 flex h-svh flex-col items-center justify-end">
        <div className="container pb-16">
          <h1 className="text-[10vw]">Aang</h1>
        </div>
      </div>
      <div className="fixed top-0 h-screen w-full">
        {Array.from(Array(END_SEQUENCE).keys()).map((i) => {
          const currSeq = i + 1;
          const seq = currSeq <= 9 ? `0${currSeq}` : currSeq;
          return (
            <Image
              key={seq}
              src={`/hero/hero-sequence${seq}.webp`}
              loading="eager"
              fill
              unoptimized
              alt="Hero Image"
              className="size-full object-cover"
              style={{
                opacity: sequence === currSeq ? 1 : 0,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
