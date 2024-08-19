"use client";

import { RefObject, useEffect, useState } from "react";
import Image from "next/image";
import {
  transform,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

type ImageSequeceProps = {
  start: number;
  end: number;
  target: RefObject<HTMLElement>;
  initialPlay?: boolean;
  initalPlayDuration?: number;
  src: (seq: string) => string;
};

export function ImageSequence({
  target,
  start,
  end,
  initialPlay,
  initalPlayDuration,
  src,
}: ImageSequeceProps) {
  const [sequence, setSequence] = useState(1);

  useEffect(() => {
    const duration = initalPlayDuration || 0;
    const initialTime = performance.now();
    const transformer = transform([0, 1], [start, end]);

    const animate = () => {
      const now = performance.now();
      const delta = Math.min((now - initialTime) / duration, 1);
      setSequence(Math.floor(transformer(delta)));
      if (delta < 1) requestAnimationFrame(animate);
    };

    if (!initialPlay) return;
    animate();
  }, [initialPlay, initalPlayDuration, end, start]);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start", "end"],
  });

  const imgIdx = useTransform(scrollYProgress, [0, 1], [end, start]);
  useMotionValueEvent(imgIdx, "change", (latest) => {
    setSequence(Math.floor(latest));
  });

  return Array.from(Array(end).keys()).map((i) => {
    const currSeq = i + 1;
    const seq = currSeq <= 9 ? `0${currSeq}` : `${currSeq}`;
    return (
      <Image
        key={seq}
        src={src(seq)}
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
  });
}
