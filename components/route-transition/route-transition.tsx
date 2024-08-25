"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { FrozenRouter } from "./frozen-router";

export function RouteTransition({
  children,
  ...rest
}: React.PropsWithChildren<HTMLMotionProps<"div">>) {
  const segment = usePathname();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div key={segment} {...rest}>
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
