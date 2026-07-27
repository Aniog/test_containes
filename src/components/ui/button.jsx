import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-brand-900 text-white hover:bg-brand-700 shadow-sm",
  accent:
    "bg-accent-400 text-brand-900 hover:bg-accent-300 shadow-sm",
  outline:
    "border border-slate-300 bg-white text-brand-900 hover:bg-slate-50",
  ghost: "text-brand-900 hover:bg-slate-100",
  white: "bg-white text-brand-900 hover:bg-slate-100 shadow-sm",
  outlineWhite:
    "border border-white/40 bg-transparent text-white hover:bg-white/10",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-base",
}

export function Button({
  as: As = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </As>
  )
}

export default Button
