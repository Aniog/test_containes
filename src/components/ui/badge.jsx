import { cn } from "@/lib/utils"

const variants = {
  default: "bg-primary-50 text-primary-700 border-primary-100",
  accent: "bg-accent-50 text-accent-700 border-accent-100",
  success: "bg-green-50 text-success border-green-100",
  neutral: "bg-muted text-muted-foreground border-border",
}

export function Badge({ variant = "default", className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
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
