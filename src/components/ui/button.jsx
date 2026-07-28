import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-800 shadow-sm",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-600 shadow-sm",
  outline:
    "border border-primary-300 text-primary bg-transparent hover:bg-primary-50",
  ghost:
    "text-primary bg-transparent hover:bg-primary-50",
  secondary:
    "bg-white text-primary border border-border hover:bg-muted",
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
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
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

export default Button
