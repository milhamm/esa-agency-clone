"use client";

import { CSSProperties, useRef } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

export default function JobsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div
      className="flex flex-col items-center justify-center bg-black"
      ref={ref}
    >
      <div className="h-[30svh] w-full"></div>
      <div className="relative flex h-[160svh] w-full items-center justify-center">
        <JobsImage
          progress={scrollYProgress}
          outputRange={["50%", "-240%"]}
          left="10%"
          top="20%"
          zIndex="2"
          aspectRatio={2 / 3}
          width="300px"
          src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <JobsImage
          progress={scrollYProgress}
          outputRange={["50%", "-120%"]}
          left="80%"
          top="20%"
          zIndex="2"
          aspectRatio={2 / 3}
          width="300px"
          src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <JobsImage
          progress={scrollYProgress}
          outputRange={["10%", "-10%"]}
          left="60%"
          top="0%"
          zIndex="2"
          aspectRatio={2 / 3}
          width="300px"
          src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <JobsImage
          progress={scrollYProgress}
          outputRange={["30%", "-80%"]}
          left="65%"
          top="50%"
          zIndex="2"
          aspectRatio={4 / 3}
          width="300px"
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <JobsImage
          progress={scrollYProgress}
          outputRange={["40%", "-100%"]}
          left="10%"
          top="60%"
          zIndex="2"
          aspectRatio={4 / 3}
          width="400px"
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <motion.div
          className="relative z-[12]"
          style={{
            y,
          }}
        >
          <h2 className="font-migha w-[62vw] text-center text-[26vw] leading-[0.9] text-[#fff500]">
            THE <br /> TEAM
          </h2>
        </motion.div>
      </div>
      <div className="h-[30svh] w-full"></div>
    </div>
  );
}

type JobsImageProps<O> = {
  progress: MotionValue<number>;
  src: string;
  left: CSSProperties["left"];
  top: CSSProperties["top"];
  zIndex: CSSProperties["zIndex"];
  aspectRatio: CSSProperties["aspectRatio"];
  width: CSSProperties["width"];
  outputRange: [O, O];
};

export function JobsImage<O>({
  src,
  left,
  top,
  zIndex,
  aspectRatio,
  width,
  progress,
  outputRange,
}: JobsImageProps<O>) {
  const y = useTransform(progress, [0, 1], outputRange);
  return (
    <motion.div
      className="absolute overflow-hidden"
      style={{
        left,
        top,
        zIndex,
        aspectRatio,
        width,
        y,
      }}
    >
      <Image src={src} fill alt="Image 1" objectFit="cover" />
    </motion.div>
  );
}
