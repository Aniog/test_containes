import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-ink text-cream hover:bg-gold",
  gold: "bg-gold text-cream hover:bg-gold-soft",
  outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
  outlineLight: "border border-cream text-cream hover:bg-cream hover:text-ink",
  ghost: "text-ink hover:text-gold",
}

const sizes = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-8 py-3.5 text-[11px]",
  lg: "px-10 py-4 text-xs",
}

export default function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed",
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
