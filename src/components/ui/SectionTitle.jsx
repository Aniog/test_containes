import React from "react";
import { cn } from "@/lib/utils";

/**
 * Premium section title — eyebrow tag + large display serif headline.
 * Centered or left-aligned variants.
 */
export function SectionTitle({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = "center",
  tone = "light",
  className,
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4 md:mb-5",
            isDark ? "text-gold-light/80" : "text-muted",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem]",
          isDark ? "text-ivory" : "text-espresso",
        )}
      >
        {renderTitleWithItalic(title, italicWord)}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 md:mt-7 max-w-[58ch] font-serif text-[1.0625rem] md:text-[1.1875rem] leading-[1.7]",
            isDark ? "text-ivory/75" : "text-ink/75",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function renderTitleWithItalic(title, italicWord) {
  if (!italicWord || !title.includes(italicWord)) return title;
  const parts = title.split(italicWord);
  return (
    <>
      {parts[0]}
      <span className="text-display-italic">{italicWord}</span>
      {parts.slice(1).join(italicWord)}
    </>
  );
}