import { cn } from "@/lib/utils"

const variants = {
  solid:
    "bg-gold text-cream hover:bg-gold-dark border border-gold hover:border-gold-dark",
  dark:
    "bg-espresso text-cream hover:bg-ink border border-espresso hover:border-ink",
  outline:
    "bg-transparent text-espresso border border-espresso/30 hover:border-espresso hover:bg-espresso hover:text-cream",
  outlineLight:
    "bg-transparent text-cream border border-cream/40 hover:bg-cream hover:text-espresso",
  ghost: "bg-transparent text-espresso border border-transparent hover:text-gold",
}

const sizes = {
  sm: "h-10 px-6 text-[11px]",
  md: "h-12 px-8 text-xs",
  lg: "h-14 px-10 text-xs",
}

export default function Button({
  as = "button",
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}) {
  const Comp = as
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
