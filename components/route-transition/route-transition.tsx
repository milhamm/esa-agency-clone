"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useIsPresent,
} from "framer-motion";

import { FrozenRouter } from "./frozen-router";

type RouteTransitionProps = React.PropsWithChildren<HTMLMotionProps<"div">>;

export function RouteTransition({ children, ...rest }: RouteTransitionProps) {
  const segment = usePathname();
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div key={segment} {...rest}>
        <div className="max-h-screen">
          <FrozenRouter>{children}</FrozenRouter>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
