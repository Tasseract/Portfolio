"use client";

import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { MdButton } from "./ui/md-button";
import { profile } from "@/lib/data";

const fade = {
  hidden: { y: 24, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-20 sm:pt-36"
    >
      {/* gradient blobs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <span className="hero-blob blob-1 left-[-10%] top-[-15%] h-[60vmax] w-[60vmax]" />
        <span className="hero-blob blob-2 right-[-15%] top-[10%] h-[50vmax] w-[50vmax]" />
        <span className="hero-blob blob-3 left-[20%] bottom-[-25%] h-[55vmax] w-[55vmax]" />
      </div>

      {/* subtle grain via radial overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,transparent_55%,var(--md-surface)_85%)]"
      />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass backdrop-blur-xl backdrop-saturate-150 px-4 py-1.5 text-xs font-medium text-[var(--md-on-surface-variant)]"
        >
          <Sparkles size={14} className="text-[var(--md-primary)]" />
          Open to On-The-Job Training
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="font-display text-5xl font-semibold tracking-tight text-[var(--md-on-surface)] sm:text-7xl md:text-[clamp(4rem,8vw,8rem)]"
        >
          {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="bg-gradient-to-br from-[var(--md-primary)] via-[var(--md-secondary)] to-[var(--md-primary)] bg-clip-text text-transparent">
            {profile.name.split(" ").at(-1)}
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-6 max-w-2xl text-lg text-[var(--md-on-surface-variant)] sm:text-xl"
        >
          {profile.role} · {profile.school}
          <br />
          <span className="text-[var(--md-on-surface)]">{profile.tagline}</span>
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MdButton variant="filled" size="lg" href="#projects">
            View work
          </MdButton>
          <MdButton variant="tonal" size="lg" href="#contact">
            Get in touch
          </MdButton>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--md-on-surface-variant)]"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
