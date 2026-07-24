import React from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial section header — small eyebrow + large serif title + optional sub.
 */
export default function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "center",
  className,
  invert = false,
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-[10px] font-medium tracking-wide-4 uppercase",
            invert ? "text-bone/70" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "mt-3 font-serif font-light leading-[1.05]",
            "text-4xl md:text-5xl",
            invert ? "text-bone" : "text-ink"
          )}
        >
          {title}
        </h2>
      )}
      {sub && (
        <p
          className={cn(
            "mt-5 text-sm md:text-[15px] font-light leading-relaxed max-w-xl",
            align === "center" && "mx-auto",
            invert ? "text-bone/75" : "text-cocoa"
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
