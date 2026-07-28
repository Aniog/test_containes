import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-widest",
            light ? "text-brand-light" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-slate-300" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
