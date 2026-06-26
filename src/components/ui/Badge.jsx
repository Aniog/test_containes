import { cn } from "@/lib/utils"

const tones = {
  brand: "bg-brand-light text-brand",
  accent: "bg-accent/10 text-accent",
  warm: "bg-accent-warm/10 text-accent-warm",
  neutral: "bg-page text-muted border border-border-soft",
  ink: "bg-ink text-white",
}

export function Badge({ tone = "brand", className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
