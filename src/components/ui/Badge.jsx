import { cn } from "@/lib/utils"

export default function Badge({ children, className, variant = "default" }) {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-slate-300 text-slate-700",
    success: "bg-green-100 text-green-800",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
