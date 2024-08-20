"use client";

import { CSSProperties, RefObject, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type MarqueeProps = {
  target: RefObject<HTMLElement>;
  children: string;
  duplicate?: number;
  duration?: number;
};

export function Marquee({
  target,
  children,
  duplicate = 2,
  duration = 10_000,
}: MarqueeProps) {
  const words = children.split(" ");

  const { scrollYProgress } = useScroll({
    target: target,
    layoutEffect: false,
  });

  const x = useTransform(scrollYProgress, [0, 0.7], [0, -450]);

  return (
    <motion.div
      style={{ x }}
      className="flex text-nowrap text-[12vw] font-semibold tracking-[-.5rem] *:flex-none *:animate-ticker-single *:pr-32"
    >
      <h1
        style={{
          animationDuration: `${duration}ms`,
        }}
      >
        {words.map((word, i) => (
          <span
            key={word + i}
            className="inline-block translate-y-full animate-slide-in transition-transform"
            style={
              {
                "--char-index": (duplicate + 1 - 1) * words.length + i,
                "--slidein-delay": "calc(.18s*var(--char-index))",
              } as CSSProperties
            }
          >
            {word + (i !== words.length - 1 ? "\u00A0" : "")}
          </span>
        ))}
      </h1>
      {Array.from(Array(duplicate).keys()).map((dupItem) => (
        <div
          key={`duplicate_${dupItem}`}
          style={{
            animationDuration: `${duration}ms`,
          }}
        >
          {words.map((word, i) => (
            <span
              key={word + i}
              className="inline-block translate-y-full animate-slide-in transition-transform"
              style={
                {
                  "--char-index": (dupItem + 1 - 1) * words.length + i,
                  "--slidein-delay": "calc(.18s*var(--char-index))",
                } as CSSProperties
              }
            >
              {word + (i !== words.length - 1 ? "\u00A0" : "")}
            </span>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
