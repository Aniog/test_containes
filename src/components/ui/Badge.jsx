import { cn } from "@/lib/utils"

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy",
        className
      )}
    >
      {children}
    </span>
  )
}
