import { cn } from "@/lib/utils"

export function Section({ id, className, children }) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-widest mb-3",
            light ? "text-accent" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-slate-300" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface p-6 md:p-8 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  )
}
