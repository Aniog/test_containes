import { cn } from "@/lib/utils"

export function Section({
  children,
  className,
  containerClassName,
  bg = "white",
  id,
  ...props
}) {
  const bgMap = {
    white: "bg-white",
    slate: "bg-slate-50",
    navy: "bg-navy-900 text-white",
    navySubtle: "bg-navy-50",
    accent: "bg-accent-50",
  }
  return (
    <section
      id={id}
      className={cn("py-16 md:py-20 lg:py-24", bgMap[bg], className)}
      {...props}
    >
      <div className={cn("container-x", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  invert = false,
}) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left"
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto", alignment, className)}>
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-3",
            invert ? "text-accent-300" : "text-accent-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          invert ? "text-white" : "text-slate-900",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg",
            invert ? "text-navy-100" : "text-slate-600",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Section
