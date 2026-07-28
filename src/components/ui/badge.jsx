import { cn } from "@/lib/utils"

const variants = {
  brand: "bg-brand-light text-brand",
  accent: "bg-accent/15 text-accent-dark",
  dark: "bg-ink/10 text-ink",
  outline: "border border-border text-slate-ink",
}

export function Badge({ variant = "brand", className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
