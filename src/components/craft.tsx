"use client";

import { motion } from "motion/react";
import { GlassCard } from "./ui/glass-card";
import { SectionHeading } from "./section-heading";
import { pillars } from "@/lib/data";

export function Craft() {
  return (
    <section id="craft" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Craft"
          title="Seven disciplines, one sensibility."
          description="Across code, sound, and image — the throughline is craft. Each role below is a real, ongoing practice."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const accent =
              p.accent === "primary"
                ? "bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)]"
                : "bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)]";
            return (
              <motion.div
                key={p.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <GlassCard
                  interactive
                  className="group h-full p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${accent} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]`}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold tracking-tight text-[var(--md-on-surface)]">
                        {p.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-[var(--md-on-surface-variant)]">
                        {p.caption}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-[var(--md-on-surface-variant)]">
                    {p.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
