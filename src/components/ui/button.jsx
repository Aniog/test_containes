import { cn } from "@/lib/utils"

export function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors transition-shadow " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary:
      "bg-navy-900 text-white hover:bg-navy-700 shadow-sm hover:shadow-md",
    accent:
      "bg-amber-500 text-white hover:bg-amber-600 shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-navy-900 border border-slate-200 hover:bg-slate-50",
    ghost: "text-navy-900 hover:bg-slate-100",
    outlineLight:
      "bg-transparent text-white border border-white/30 hover:bg-white/10",
    darkOutline:
      "bg-transparent text-navy-900 border border-navy-900/20 hover:bg-navy-50",
  }

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-7 text-base",
  }

  return (
    <Comp className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Comp>
  )
}