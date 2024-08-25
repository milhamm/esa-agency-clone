"use client";

import { CSSProperties, RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cx } from "@/libs/cx";

type MarqueeProps = {
  target: RefObject<HTMLElement>;
  children: string;
  duplicate?: number;
  duration?: number;
  showEntryAnimation?: boolean;
};

export function Marquee({
  target,
  children,
  duplicate = 2,
  duration = 10_000,
  showEntryAnimation = false,
}: MarqueeProps) {
  const words = children.split(" ");

  const { scrollYProgress } = useScroll({
    target: target,
    layoutEffect: false,
  });

  const x = useTransform(scrollYProgress, [0, 0.7], [0, -450]);

  const entryAnimationClassname = cx(
    "translate-y-full animate-slide-in transition-transform",
  );

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
            className={cx("inline-block", {
              [entryAnimationClassname]: showEntryAnimation,
            })}
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
              className={cx("inline-block", {
                [entryAnimationClassname]: showEntryAnimation,
              })}
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
