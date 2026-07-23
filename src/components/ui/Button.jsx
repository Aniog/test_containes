import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-gold text-ivory hover:bg-gold-soft border border-gold hover:border-gold-soft",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-ivory bg-transparent",
  outlineLight:
    "border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink bg-transparent",
  dark: "bg-espresso text-ivory hover:bg-ink border border-espresso",
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
        "inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 rounded-sm cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
