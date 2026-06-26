import { cn } from "@/lib/utils"

export function Container({ as: Comp = "div", className, children, ...props }) {
  return (
    <Comp className={cn("container-x", className)} {...props}>
      {children}
    </Comp>
  )
}

export function Section({ className, children, id, ...props }) {
  return (
    <section id={id} className={cn("section", className)} {...props}>
      {children}
    </section>
  )
}

export function Eyebrow({ children, className }) {
  return <p className={cn("eyebrow", className)}>{children}</p>
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}) {
  const alignCls =
    align === "center"
      ? "mx-auto text-center"
      : align === "right"
        ? "ml-auto text-right"
        : "text-left"
  return (
    <div className={cn("max-w-3xl", alignCls, className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

export function Badge({ children, tone = "neutral", className }) {
  const tones = {
    neutral: "bg-slate-100 text-slate-700",
    navy: "bg-navy-50 text-navy-700",
    amber: "bg-amber-100 text-amber-700",
    success: "bg-emerald-50 text-emerald-700",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone] ?? tones.neutral,
        className
      )}
    >
      {children}
    </span>
  )
}