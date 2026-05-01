import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--md-outline-variant)]/40 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-[var(--md-on-surface-variant)] sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}.</span>
        <span className="opacity-70">Designed and built from scratch.</span>
      </div>
    </footer>
  );
}
