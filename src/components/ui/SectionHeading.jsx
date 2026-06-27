import React from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  eyebrowId,
  titleId,
  descId,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-2xl",
        align === "center" && "items-center text-center mx-auto",
        align === "left" && "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          id={eyebrowId}
          className="text-[11px] uppercase tracking-[0.32em] text-velmora-mocha"
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          id={titleId}
          className="font-serif text-3xl md:text-5xl text-velmora-espresso font-light leading-[1.1]"
        >
          {title}
        </h2>
      )}
      {description && (
        <p id={descId} className="text-[15px] text-velmora-mocha leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
