import { cn } from "@/lib/utils"

const variants = {
  brand: "bg-brand-50 text-brand-700 border-brand-100",
  accent: "bg-accent-50 text-accent-700 border-accent-100",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
}

export function Badge({ variant = "brand", className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
