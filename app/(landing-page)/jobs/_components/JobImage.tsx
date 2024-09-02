"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";

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
