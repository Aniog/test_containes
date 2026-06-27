import React from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-block text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-gold-deep)] font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";
  return (
    <div className={cn("flex flex-col gap-4 max-w-2xl", alignment, className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-[var(--color-ink)]">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-[var(--color-stone)] text-base sm:text-[0.95rem] leading-relaxed max-w-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;