import React from "react"
import { cn } from "@/lib/utils"

export default function SectionHeading({ eyebrow, title, sub, align = "center", dark = false }) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <p
          className={cn(
            "text-[11px] font-medium uppercase tracking-[0.3em]",
            dark ? "text-accent" : "text-accent-deep",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 font-serif text-3xl font-light leading-tight md:text-[2.6rem] md:leading-[1.15]",
          dark ? "text-[#F3EDE2]" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed md:text-[15px]",
            dark ? "text-[#B9AC97]" : "text-muted-foreground",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
