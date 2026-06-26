import { cn } from "@/lib/utils"

export function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}

export function Section({ className, children, id }) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      {children}
    </section>
  )
}

export function Eyebrow({ children, className, light = false }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em]",
        light ? "text-accent" : "text-accent-dark",
        className,
      )}
    >
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
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
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          light ? "text-white" : "text-ink",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed md:text-lg",
            light ? "text-white/70" : "text-graphite",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default Section
