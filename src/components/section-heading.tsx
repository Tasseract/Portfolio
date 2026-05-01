"use client";

import { motion } from "motion/react";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 max-w-3xl">
      <motion.span
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="inline-block rounded-full bg-[var(--md-primary-container)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--md-on-primary-container)]"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--md-on-surface)] sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 text-lg text-[var(--md-on-surface-variant)]"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
