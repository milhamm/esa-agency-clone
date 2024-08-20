import { useRef } from "react";
import {
  motion,
  MotionValue,
  transform,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { Logo } from "./logo";

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

  const yFooter = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scale.set(scaleTransformer(value));
    borderRadius.set(borderRadiusTransformer(value));
  });

  return (
    <motion.footer
      style={{ y: yFooter }}
      className="relative z-10 pt-20"
      ref={ref}
    >
      <div className="container mx-auto h-[800px]">
        <div className="flex flex-col justify-between">
          <div className="flex items-start gap-x-[4vw] text-sm">
            <div className="mr-auto">
              <Logo />
            </div>
            <div className="flex flex-col gap-y-6">
              <div>Contact</div>
              <ul className="max-w-[20ch]">
                <li>ESE Agency Grubenstrasse 54 8045 Zürich Schweiz</li>
                <li>info@eseagency.ch</li>
                <li>+41 52 212 30 71</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </motion.footer>
  );
}
