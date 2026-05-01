"use client";

import { motion } from "motion/react";
import { GlassCard } from "./ui/glass-card";
import { SectionHeading } from "./section-heading";
import { SkillDots } from "./ui/skill-dot";
import { skillGroups } from "@/lib/data";

export function Tech() {
  return (
    <section id="tech" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools, languages, and the systems beneath."
          description="Self-reported proficiency on the raw, non-AI-assisted axis. With AI-augmented workflow, output is meaningfully faster."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: gi * 0.08 }}
            >
              <GlassCard className="h-full p-7 sm:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--md-on-surface-variant)]">
                  {g.title}
                </h3>
                <ul className="mt-5 space-y-4">
                  {g.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-base font-medium text-[var(--md-on-surface)]">
                        {s.name}
                      </span>
                      <SkillDots level={s.level} />
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
