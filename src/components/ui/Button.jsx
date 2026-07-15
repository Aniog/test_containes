import { cn } from "@/lib/utils";

export function Button({
  className,
  variant = "solid",
  size = "md",
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold/60 disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "solid" &&
          "bg-velmora-ink text-white hover:bg-velmora-charcoal",
        variant === "accent" &&
          "bg-velmora-gold text-white hover:bg-velmora-gold-dark shadow-sm",
        variant === "outline" &&
          "border border-velmora-ink text-velmora-ink bg-transparent hover:bg-velmora-ink hover:text-white",
        variant === "ghost" &&
          "bg-transparent text-velmora-ink hover:bg-velmora-sand",
        size === "sm" && "px-4 py-2 text-xs tracking-wide uppercase",
        size === "md" && "px-6 py-3 text-sm tracking-wide",
        size === "lg" && "px-8 py-4 text-base tracking-wide",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
