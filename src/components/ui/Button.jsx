import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-gold text-cream hover:bg-gold-deep border border-gold hover:border-gold-deep",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  outlineLight:
    "bg-transparent text-cream border border-cream/70 hover:bg-cream hover:text-espresso",
  dark: "bg-espresso text-cream hover:bg-ink border border-espresso",
}

export default function Button({
  as: As = "button",
  variant = "primary",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 rounded-none select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
