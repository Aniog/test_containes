import { cn } from "@/lib/utils"

export function Eyebrow({ children, className, light = false }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "h-px w-8",
          light ? "bg-accent-soft/70" : "bg-accent/70",
        )}
      />
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          light ? "text-accent-soft" : "text-accent",
        )}
      >
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow light={light} className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight md:text-4xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
