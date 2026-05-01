"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import Link from "next/link";
import { forwardRef, type ReactNode } from "react";

type Variant = "filled" | "tonal" | "text" | "outlined";

const variantClasses: Record<Variant, string> = {
  filled:
    "bg-[var(--md-primary)] text-[var(--md-on-primary)] shadow-[0_2px_10px_-2px_rgba(91,95,239,0.45)] hover:shadow-[0_8px_24px_-6px_rgba(91,95,239,0.55)]",
  tonal:
    "bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)] hover:bg-[color-mix(in_srgb,var(--md-secondary-container)_88%,white)]",
  outlined:
    "bg-transparent text-[var(--md-on-surface)] border border-[var(--md-outline)] hover:bg-[color-mix(in_srgb,var(--md-on-surface)_8%,transparent)]",
  text: "bg-transparent text-[var(--md-primary)] hover:bg-[color-mix(in_srgb,var(--md-primary)_10%,transparent)]",
};

type CommonProps = {
  variant?: Variant;
  icon?: ReactNode;
  trailing?: ReactNode;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium select-none cursor-pointer transition-shadow will-change-transform";

type ButtonAsButton = CommonProps &
  Omit<HTMLMotionProps<"button">, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export const MdButton = forwardRef<HTMLElement, ButtonAsButton | ButtonAsLink>(
  function MdButton(props, ref) {
    const {
      variant = "filled",
      icon,
      trailing,
      size = "md",
      children,
      className = "",
    } = props as CommonProps & { className?: string };

    const merged = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    const inner = (
      <>
        {icon ? <span className="flex shrink-0 items-center">{icon}</span> : null}
        <span>{children}</span>
        {trailing ? <span className="flex shrink-0 items-center">{trailing}</span> : null}
      </>
    );

    const motionProps = {
      whileHover: { y: -2, scale: 1.02 },
      whileTap: { scale: 0.97 },
      transition: { type: "spring" as const, stiffness: 380, damping: 22 },
    };

    if ("href" in props && props.href) {
      const linkProps = props.external
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {};
      return (
        <motion.span {...motionProps} className="inline-flex">
          <Link
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={props.href}
            className={merged}
            {...linkProps}
          >
            {inner}
          </Link>
        </motion.span>
      );
    }

    const { variant: _v, icon: _i, trailing: _t, size: _s, children: _c, className: _cn, ...rest } =
      props as ButtonAsButton & { className?: string };
    void _v; void _i; void _t; void _s; void _c; void _cn;

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={merged}
        {...motionProps}
        {...rest}
      >
        {inner}
      </motion.button>
    );
  },
);
