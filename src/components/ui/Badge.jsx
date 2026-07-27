import { cn } from "@/lib/utils"

export function Badge({ children, className, variant = "default", ...props }) {
  const variants = {
    default: "bg-primary-light text-primary-dark",
    secondary: "bg-secondary/10 text-secondary-dark",
    outline: "border border-slate-200 text-slate-600",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
