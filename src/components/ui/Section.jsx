import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Section = forwardRef(function Section(
  { children, className, containerClassName, id },
  ref,
) {
  return (
    <section id={id} ref={ref} className={cn("section-pad", className)}>
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  )
})

export default Section

export { Section }

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="heading-2">{title}</h2>
      {description && (
        <p className="lead mt-4 text-body">{description}</p>
      )}
    </div>
  )
}
