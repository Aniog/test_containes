import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-sm",
  secondary:
    "bg-white text-ink border border-slate-300 hover:border-brand hover:text-brand",
  outline:
    "bg-transparent text-white border border-white/70 hover:bg-white/10",
  ghost: "bg-transparent text-ink hover:bg-slate-100",
  dark: "bg-brand-dark text-white hover:bg-brand",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
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
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",
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
