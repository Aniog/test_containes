import React from "react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, sub, align = "center", dark = false }) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={cn("flex flex-col gap-3 max-w-2xl", align === "center" && "mx-auto", alignCls)}>
      {eyebrow && (
        <span className={cn("font-body text-[11px] font-semibold uppercase tracking-mega", dark ? "text-gold" : "text-gold-deep")}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn("font-display text-3xl md:text-5xl leading-tight", dark ? "text-ivory" : "text-espresso")}>
        {title}
      </h2>
      {sub && (
        <p className={cn("font-body text-sm md:text-base leading-relaxed", dark ? "text-ivory/70" : "text-cocoa/70")}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}
