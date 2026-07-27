import { cn } from "@/lib/utils"

const SectionHeader = ({ eyebrow, title, subtitle, align = "left", className, light = false }) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"
  return (
    <div className={cn("max-w-3xl", alignment, className)}>
      {eyebrow && (
        <p className={cn(
          "uppercase tracking-wider text-xs font-semibold mb-3",
          light ? "text-[#C9A227]" : "text-[#D62828]"
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold leading-tight tracking-tight",
        light ? "text-white" : "text-ink"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-base md:text-lg leading-relaxed",
          light ? "text-white/80" : "text-ink-subtle"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
