"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      aria-label="Toggle theme"
      suppressHydrationWarning
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="relative grid h-10 w-10 place-items-center rounded-full bg-[var(--md-surface-container-high)] text-[var(--md-on-surface)] hover:bg-[var(--md-surface-container-highest)] cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={resolvedTheme ?? "loading"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 grid place-items-center"
          suppressHydrationWarning
        >
          {resolvedTheme ? (
            isDark ? <Moon size={18} /> : <Sun size={18} />
          ) : (
            <Sun size={18} className="opacity-0" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
