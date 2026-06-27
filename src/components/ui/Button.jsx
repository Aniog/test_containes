import { cn } from "@/lib/utils"

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  fullWidth,
  ...props
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-widest transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-charcoal text-ivory hover:bg-ink",
        variant === "outline" &&
          "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-ivory",
        variant === "accent" &&
          "bg-gold text-ivory hover:bg-gold-dark",
        variant === "ghost" &&
          "bg-transparent text-charcoal hover:bg-cream",
        size === "sm" && "h-10 px-5 text-[11px]",
        size === "md" && "h-12 px-8 text-xs",
        size === "lg" && "h-14 px-10 text-xs",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
