import { cn } from "@/lib/utils"

const VARIANTS = {
  primary:
    "bg-gold text-ink hover:bg-gold-deep hover:text-cream",
  outline:
    "border border-ink/30 text-ink hover:bg-ink hover:text-cream",
  outlineLight:
    "border border-cream/40 text-cream hover:bg-cream hover:text-ink",
  solid:
    "bg-ink text-cream hover:bg-espresso",
}

export function Button({
  as: As = "button",
  variant = "primary",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
