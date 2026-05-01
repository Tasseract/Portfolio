type Props = {
  level: 1 | 2 | 3 | 4;
  label?: string;
};

const levelText: Record<Props["level"], string> = {
  1: "Beginner",
  2: "Knowledgeable",
  3: "Intermediate",
  4: "Professional",
};

export function SkillDots({ level, label }: Props) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-[var(--md-on-surface-variant)]">
      <span className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i < level
                ? "bg-[var(--md-primary)]"
                : "bg-[var(--md-outline-variant)]"
            }`}
            aria-hidden
          />
        ))}
      </span>
      <span className="sr-only">{label ?? levelText[level]}</span>
      <span aria-hidden className="font-medium tracking-wide">
        {label ?? levelText[level]}
      </span>
    </span>
  );
}
