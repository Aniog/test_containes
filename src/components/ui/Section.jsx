import { cn } from "@/lib/utils"

export function Section({ className, children, ...props }) {
  return (
    <section className={cn("py-20 md:py-28", className)} {...props}>
      {children}
    </section>
  )
}

export function Container({ className, children, ...props }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </div>
  )
}

export function Eyebrow({ className, children }) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-wider text-[#1B6CA8]",
        className
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight md:text-4xl",
          light ? "text-white" : "text-[#0B2545]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition hover:shadow-md hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
