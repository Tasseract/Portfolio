"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { GithubIcon } from "./ui/github-icon";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#craft", label: "Craft" },
  { href: "#tech", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-40 flex justify-center px-4 sm:top-6"
    >
      <nav className="glass backdrop-blur-2xl backdrop-saturate-150 flex items-center gap-2 rounded-full px-2 py-2 sm:gap-4 sm:px-3">
        <Link
          href="#top"
          className="px-4 py-1.5 text-sm font-semibold tracking-tight text-[var(--md-on-surface)]"
        >
          {profile.shortName}.
        </Link>

        <ul className="hidden items-center md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-1.5 text-sm text-[var(--md-on-surface-variant)] transition-colors hover:bg-[color-mix(in_srgb,var(--md-on-surface)_8%,transparent)] hover:text-[var(--md-on-surface)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 pl-1">
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="grid h-10 w-10 place-items-center rounded-full bg-[var(--md-surface-container-high)] text-[var(--md-on-surface)] hover:bg-[var(--md-surface-container-highest)]"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </motion.a>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
