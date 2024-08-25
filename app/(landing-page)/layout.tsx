"use client";

import { motion, useMotionValue } from "framer-motion";

import { Footer, Navbar } from "@/components/layouts";
import { Lenis } from "@/components/lenis/lenis";
import { RouteTransition } from "@/components/route-transition/route-transition";
import { BackgroundNoise } from "@/components/ui";

export default function LandingPageLayout({
  children,
}: React.PropsWithChildren) {
  const scale = useMotionValue(1);
  const borderRadius = useMotionValue(0);

  return (
    <Lenis>
      <BackgroundNoise />
      <Navbar />
      <RouteTransition
        className="max-h-screen"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%", scale: 0.8, opacity: 0.7 }}
        transition={{
          duration: 0.8,
          type: "tween",
          ease: [0.602, 0.001, 0.175, 1],
        }}
      >
        <motion.main
          style={{ scale, borderRadius }}
          className="relative z-20 origin-bottom"
        >
          {children}
        </motion.main>
        <Footer scale={scale} borderRadius={borderRadius} />
      </RouteTransition>
    </Lenis>
  );
}
