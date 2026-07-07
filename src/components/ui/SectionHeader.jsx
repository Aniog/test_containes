import React from "react"
import { cn } from "@/lib/utils"

const SectionHeader = ({
  eyebrow,
  title,
  align = "center",
  description,
  cta,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      {title ? (
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink max-w-3xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="font-sans text-[15px] sm:text-base text-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      ) : null}
      {cta ? <div className="pt-2">{cta}</div> : null}
    </div>
  )
}

export default SectionHeader
