"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { forwardRef } from "react";

type GlassCardProps = HTMLMotionProps<"div"> & {
  interactive?: boolean;
  intense?: boolean;
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  function GlassCard(
    { interactive = false, intense = false, className = "", children, ...rest },
    ref,
  ) {
    return (
      <motion.div
        ref={ref}
        className={`${intense ? "glass-strong" : "glass"} backdrop-blur-2xl backdrop-saturate-150 relative overflow-hidden rounded-[28px] ${className}`}
        whileHover={
          interactive
            ? { y: -4, scale: 1.015 }
            : undefined
        }
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  },
);
