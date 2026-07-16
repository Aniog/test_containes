import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-gold text-espresso hover:bg-gold-soft tracking-[0.18em] uppercase",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-canvas tracking-[0.18em] uppercase",
  ghost: "text-ink hover:text-gold",
  dark:
    "bg-espresso text-canvas hover:bg-ink tracking-[0.18em] uppercase",
}

const sizes = {
  sm: "h-9 px-5 text-[11px]",
  md: "h-11 px-7 text-xs",
  lg: "h-13 px-9 text-xs py-3.5",
  icon: "h-10 w-10",
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  as: As = "button",
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
