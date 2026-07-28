import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-sm",
  accent:
    "bg-accent text-ink hover:bg-accent-dark shadow-sm",
  outline:
    "border border-brand text-brand bg-white hover:bg-brand-light",
  ghost:
    "text-ink hover:bg-brand-light",
  dark:
    "bg-ink text-white hover:bg-brand-dark",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
}

export function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
