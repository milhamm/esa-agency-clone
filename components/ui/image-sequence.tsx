"use client";

import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import {
  transform,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { drawCover } from "@/libs/canvas";

type ImageSequeceProps = {
  start: number;
  end: number;
  target: RefObject<HTMLElement>;
  imageSequenceContainerTarget: RefObject<HTMLElement>;
  initialPlay?: boolean;
  initalPlayDuration?: number;
  src: (seq: string) => string;
};

export function ImageSequence({
  target,
  imageSequenceContainerTarget,
  start,
  end,
  initialPlay,
  initalPlayDuration = 1000,
  src,
}: ImageSequeceProps) {
  const images = Array.from(Array(end + 1).keys()).map((i) => {
    const img = new Image();
    img.src = src(i.toString().padStart(2, "0"));
    return img;
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const tick = (ctx: CanvasRenderingContext2D, seq: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const img = images[seq];
    drawCover(ctx, img);
  };

  useLayoutEffect(() => {
    const container = imageSequenceContainerTarget.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    const { width, height } = container.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
  }, [imageSequenceContainerTarget]);

  useEffect(() => {
    const duration = initalPlayDuration;
    const initialTime = performance.now();
    const transformer = transform([0, 1], [start, end]);

    const animate = () => {
      const now = performance.now();
      const delta = Math.min((now - initialTime) / duration, 1);

      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;

      tick(ctx, Math.floor(transformer(delta)));
      if (delta < 1) requestAnimationFrame(animate);
    };

    if (!initialPlay) return;
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { scrollYProgress } = useScroll({
    target: target,
    layoutEffect: false,
  });

  const sequenceToScroll = useTransform(scrollYProgress, [0, 1], [end, start]);
  useMotionValueEvent(sequenceToScroll, "change", (seq) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const currentSequence = Math.floor(seq);
    tick(ctx, currentSequence);
  });

  return <canvas ref={canvasRef} />;
}
