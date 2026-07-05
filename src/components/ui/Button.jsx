import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center font-sans uppercase tracking-widest2 text-[11px] md:text-xs transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"

const variants = {
  solid:
    "bg-gold text-cream hover:bg-gold-deep px-7 py-3.5",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-cream px-7 py-3.5",
  outlineLight:
    "border border-cream/70 text-cream hover:bg-cream hover:text-ink px-7 py-3.5",
  ghost:
    "text-ink hover:text-gold px-2 py-1",
}

export default function Button({
  as: As = "button",
  variant = "solid",
  className = "",
  children,
  ...rest
}) {
  return (
    <As className={cn(base, variants[variant] || variants.solid, className)} {...rest}>
      {children}
    </As>
  )
}
