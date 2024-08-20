"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type SplitTextProps = {
  children: string;
} & HTMLMotionProps<"div">;

export function SplitText({ children, ...rest }: SplitTextProps) {
  let words = children.split(" ");

  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <motion.div {...rest} style={{ display: "inline-block" }} custom={i}>
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.div>
      </div>
    );
  });
}
