"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "./ui/glass-card";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've shipped — and shipped from scratch."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={p.href}
                target={p.external ? "_blank" : undefined}
                rel={p.external ? "noreferrer noopener" : undefined}
                className="block h-full"
              >
                <GlassCard
                  interactive
                  className="group flex h-full flex-col gap-5 p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--md-on-surface)]">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--md-on-surface-variant)]">
                        {p.caption}
                      </p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--md-surface-container-high)] text-[var(--md-on-surface)] transition-all group-hover:bg-[var(--md-primary)] group-hover:text-[var(--md-on-primary)] group-hover:rotate-[-12deg]">
                      <ArrowUpRight size={18} strokeWidth={2.4} />
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--md-on-surface-variant)]">
                    {p.description}
                  </p>
                  <p className="mt-auto text-sm font-medium text-[var(--md-primary)]">
                    {p.cta} →
                  </p>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
