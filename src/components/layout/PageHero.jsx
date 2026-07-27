import React from "react"
import { cn } from "@/lib/utils"

const PageHero = ({ eyebrow, title, description, children, className, align = "left" }) => {
  return (
    <section
      className={cn(
        "bg-navy text-ink-onDark border-b border-navy-800",
        className
      )}
    >
      <div
        className={cn(
          "container-content py-16 md:py-20",
          align === "center" && "text-center max-w-3xl mx-auto"
        )}
      >
        {eyebrow && (
          <span className="eyebrow text-teal-light">{eyebrow}</span>
        )}
        <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink-onDark">
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-5 text-base md:text-lg leading-relaxed text-ink-onDarkMuted max-w-2xl",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

export default PageHero
