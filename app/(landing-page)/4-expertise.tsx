"use client";

import {
  motion,
  HTMLMotionProps,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimationControls,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type ItemExpertiseProps = {
  src: string;
  name: string;
  idx: number;
  currentIdx: number;
};

const transition = {
  duration: 1,
  type: "tween",
  ease: [0.602, 0.001, 0.175, 1],
};

const outerVariants = {
  hidden: {
    y: "100%",
    transition,
  },
  show: {
    y: "0%",
    transition,
  },
};

const innerVariants = {
  show: {
    y: "0%",
    opacity: 1,
    transition,
  },
  hidden: {
    y: "-50%",
    opacity: 0.2,
    transition,
  },
};

function ItemExpertise({ src, name, idx, currentIdx }: ItemExpertiseProps) {
  return (
    <motion.div
      variants={outerVariants}
      className="absolute top-0 h-full w-full bg-black"
      initial="hidden"
      animate={currentIdx >= idx ? "show" : "hidden"}
    >
      <Link href="/expertise">
        <motion.div
          variants={innerVariants}
          className="absolute inset-0"
          initial="hidden"
          animate={currentIdx <= idx ? "show" : "hidden"}
        >
          <div className="absolute inset-0">
            <Image
              src={src}
              className="object-cover"
              fill
              alt="Website expertise"
            />
            <div className="absolute bottom-0 h-[20svh] w-full bg-gradient-to-b from-black/0 to-black"></div>
          </div>
          <div className="absolute inset-0 flex h-svh flex-col items-center justify-end overflow-hidden">
            <div className="container mx-auto pb-20">
              <h1 className="flex text-nowrap text-[10vw] font-semibold tracking-[-.5rem]">
                {name}
              </h1>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

const SCROLL_HEIGHT = 700;
const NUM_PAGE = 4;

function getRange(input: number, n: number): number[] {
  const step = 1 / n;
  const start = (input - 1) * step;
  const end = input * step;
  return [start, end];
}

function useScrollProgressPage(
  scrollYProgress: MotionValue<number>,
  totalPages: number,
  page: number,
) {
  return useTransform(scrollYProgress, getRange(page, totalPages), [0, 1]);
}

export function SectionExpretise() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    layoutEffect: false,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x1 = useScrollProgressPage(scaleX, NUM_PAGE, 1);
  const x2 = useScrollProgressPage(scaleX, NUM_PAGE, 2);
  const x3 = useScrollProgressPage(scaleX, NUM_PAGE, 3);
  const x4 = useScrollProgressPage(scaleX, NUM_PAGE, 4);

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if (val < 0.25) {
      setActiveIdx(0);
    }
    if (val >= 0.25 && val < 0.5) {
      setActiveIdx(1);
    }
    if (val >= 0.5 && val < 0.75) {
      setActiveIdx(2);
    }
    if (val >= 0.75) {
      setActiveIdx(3);
    }
  });

  return (
    <section>
      <div
        ref={scrollRef}
        className="relative isolate"
        style={{ height: `${SCROLL_HEIGHT}svh` }}
      >
        <div className="sticky top-0 h-[120svh]">
          <div className="relative h-full">
            <ItemExpertise
              idx={0}
              currentIdx={activeIdx}
              src="/expertises/1-website.jpg"
              name="Website"
            />
            <ItemExpertise
              idx={1}
              currentIdx={activeIdx}
              src="/expertises/2-content-marketing.jpg"
              name="Content Marketing"
            />
            <ItemExpertise
              idx={2}
              currentIdx={activeIdx}
              src="/expertises/3-branding.jpg"
              name="Branding"
            />
            <ItemExpertise
              idx={3}
              currentIdx={activeIdx}
              src="/expertises/4-campaigning.jpg"
              name="Campaigning"
            />
          </div>
          <div className="container absolute inset-[0_0%_20svh] z-20 mx-auto flex flex-col justify-end pb-20">
            <div className="flex gap-4">
              <div className="relative h-0.5 w-full bg-gray-400/35">
                <motion.div
                  className="absolute left-0 size-full origin-left bg-white"
                  style={{ scaleX: x1 }}
                ></motion.div>
              </div>
              <div className="relative h-0.5 w-full bg-gray-400/35">
                <motion.div
                  className="absolute left-0 size-full origin-left bg-white"
                  style={{ scaleX: x2 }}
                ></motion.div>
              </div>
              <div className="relative h-0.5 w-full bg-gray-400/35">
                <motion.div
                  className="absolute left-0 size-full origin-left bg-white"
                  style={{ scaleX: x3 }}
                ></motion.div>
              </div>
              <div className="relative h-0.5 w-full bg-gray-400/35">
                <motion.div
                  className="absolute left-0 size-full origin-left bg-white"
                  style={{ scaleX: x4 }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-1 h-[100svh] w-full bg-black"></div>
    </section>
  );
}
