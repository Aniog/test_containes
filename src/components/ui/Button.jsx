import { cn } from "@/lib/utils"

export function Button({
  variant = "primary",
  size = "md",
  className,
  asChild = false,
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
  const variants = {
    primary:
      "bg-accent-500 hover:bg-accent-600 text-white",
    secondary:
      "bg-navy-900 hover:bg-navy-800 text-white",
    outline:
      "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-white",
    ghost:
      "text-navy-900 hover:text-accent-600 bg-transparent",
    white:
      "bg-white text-navy-900 hover:bg-slate-100",
  }
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-7 py-3.5 text-base",
  }
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
