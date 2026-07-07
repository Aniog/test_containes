import { cn } from "@/lib/utils"

export function SectionHeader({ eyebrow, title, subtitle, align = "center", className }) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center"
  return (
    <div className={cn("flex flex-col gap-3", alignCls, className)}>
      {eyebrow && <span className="eyebrow text-gold-300">{eyebrow}</span>}
      {title && (
        <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-cocoa-100 text-sm md:text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
