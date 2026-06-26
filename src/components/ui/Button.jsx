import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-sm",
  secondary:
    "bg-white text-ink border border-border-soft hover:border-brand hover:text-brand",
  ghost: "text-brand hover:bg-brand/5",
  outline: "border border-brand text-brand hover:bg-brand/5",
  dark: "bg-ink text-white hover:bg-ink/90",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
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
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Button
