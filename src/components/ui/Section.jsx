import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export function Container({ className, children, ...rest }) {
  return (
    <div className={cn("container-editorial", className)} {...rest}>
      {children}
    </div>
  )
}

export const Section = forwardRef(function Section(
  { id, className, children, background = "paper", spacing = "lg", ...rest },
  ref,
) {
  const bg = {
    paper: "bg-paper text-ink",
    warm: "bg-paper-warm text-ink",
    ink: "bg-ink text-paper",
    transparent: "bg-transparent text-ink",
  }[background]

  const pad = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-28 lg:py-32",
  }[spacing]

  return (
    <section ref={ref} id={id} className={cn(bg, pad, className)} {...rest}>
      {children}
    </section>
  )
})

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
  headingClassName,
}) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
  }[align]

  return (
    <div className={cn("max-w-2xl", alignClass, className)}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      {heading ? (
        <h2
          className={cn(
            "editorial-heading text-3xl md:text-4xl lg:text-5xl",
            headingClassName,
          )}
        >
          {heading}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-4 text-sm md:text-base text-taupe leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}
