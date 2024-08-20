import { useRef } from "react";
import {
  MotionValue,
  transform,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

type FooterProps = {
  scale: MotionValue<number>;
  borderRadius: MotionValue<number>;
};

export function Footer({ scale, borderRadius }: FooterProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: false,
    // Footer height + padding to end of container
    offset: ["-860px", "end"],
  });

  const scaleTransformer = transform([0, 1], [1, 0.9]);
  const borderRadiusTransformer = transform([0, 1], [0, 24]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scale.set(scaleTransformer(value));
    borderRadius.set(borderRadiusTransformer(value));
  });

  return (
    <footer className="relative pt-20" ref={ref}>
      <div className="h-[800px]">Ini adalah footer</div>
    </footer>
  );
}
