import * as React from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({ eyebrow, title, subtitle, align = "left", className, children }) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-copper-500" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text text-balance leading-[1.1]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
