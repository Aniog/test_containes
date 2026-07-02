import { cn } from "@/lib/utils"

export function Button({
  children,
  variant = "solid",
  size = "md",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "solid" &&
          "bg-velmora-espresso text-velmora-cream hover:bg-velmora-charcoal",
        variant === "accent" &&
          "bg-velmora-gold text-velmora-charcoal hover:bg-velmora-gold-dark hover:text-velmora-cream",
        variant === "outline" &&
          "border border-velmora-espresso text-velmora-espresso bg-transparent hover:bg-velmora-espresso hover:text-velmora-cream",
        variant === "ghost" &&
          "bg-transparent text-velmora-espresso hover:bg-velmora-sand",
        size === "sm" && "px-4 py-2 text-xs tracking-widest uppercase",
        size === "md" && "px-6 py-3 text-sm tracking-widest uppercase",
        size === "lg" && "px-8 py-4 text-sm tracking-widest uppercase",
        size === "xl" && "px-10 py-5 text-sm tracking-widest uppercase w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
