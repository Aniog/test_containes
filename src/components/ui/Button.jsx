import { cn } from "@/lib/utils"

const variants = {
  solid: "bg-gold text-cream hover:bg-gold-soft border border-gold",
  outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
  outlineLight: "border border-cream/70 text-cream hover:bg-cream hover:text-ink",
  ghost: "border border-transparent text-ink hover:border-line",
}

export default function Button({
  as: As = "button",
  variant = "solid",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs md:text-sm font-medium uppercase tracking-widest2 transition-all duration-300 rounded-sm cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
