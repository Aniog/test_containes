import React from "react";
import { cn } from "@/lib/utils";

// Editorial section heading: small gold eyebrow + large serif title.
export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className,
  titleClassName,
}) {
  const alignCls =
    align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={cn("flex flex-col gap-3", alignCls, className)}>
      {eyebrow && (
        <span className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-5xl leading-[1.05] text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
