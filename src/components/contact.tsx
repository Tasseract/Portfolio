"use client";

import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { MdButton } from "./ui/md-button";
import { GithubIcon } from "./ui/github-icon";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's make something together."
          description="I'm open to On-The-Job Training opportunities and collaboration. The fastest way to reach me is via email."
        />

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard intense className="p-8 sm:p-12">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <p className="font-display text-3xl font-semibold tracking-tight text-[var(--md-on-surface)] sm:text-4xl">
                  Open to opportunities.
                </p>
                <p className="mt-4 text-base text-[var(--md-on-surface-variant)] sm:text-lg">
                  Reach out for OJT, project collaboration, or to talk about
                  music, film, or code. I read every message.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <MdButton
                    variant="filled"
                    size="lg"
                    href={`mailto:${profile.email}`}
                    icon={<Mail size={18} />}
                  >
                    Email me
                  </MdButton>
                  <MdButton
                    variant="tonal"
                    size="lg"
                    href={profile.github}
                    external
                    icon={<GithubIcon className="h-[18px] w-[18px]" />}
                  >
                    GitHub
                  </MdButton>
                </div>
              </div>

              <ul className="grid gap-3">
                <ContactRow
                  icon={<Mail size={18} />}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactRow
                  icon={<Phone size={18} />}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                />
                <ContactRow
                  icon={<GithubIcon className="h-[18px] w-[18px]" />}
                  label="GitHub"
                  value={`@${profile.githubHandle}`}
                  href={profile.github}
                  external
                />
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="flex items-center gap-4 rounded-[20px] bg-[color-mix(in_srgb,var(--md-surface-container-high)_70%,transparent)] px-5 py-4 transition-colors hover:bg-[var(--md-surface-container-highest)]"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)]">
          {icon}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="text-xs uppercase tracking-wider text-[var(--md-on-surface-variant)]">
            {label}
          </span>
          <span className="truncate text-sm font-medium text-[var(--md-on-surface)]">
            {value}
          </span>
        </span>
      </motion.a>
    </li>
  );
}
