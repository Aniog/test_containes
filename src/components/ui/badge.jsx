import { cn } from "@/lib/utils"

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
