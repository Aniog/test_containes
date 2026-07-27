import { cn } from "@/lib/utils"

export function Section({ as: As = "section", className, children, ...props }) {
  return (
    <As className={cn("py-16 md:py-20 lg:py-24", className)} {...props}>
      {children}
    </As>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left", className }) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left"
  return (
    <div className={cn("max-w-3xl", alignment, className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
