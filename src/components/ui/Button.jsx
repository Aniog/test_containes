import { cn } from "@/lib/utils";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-gold text-base hover:bg-gold-dark",
        variant === "secondary" &&
          "border border-base-800 bg-transparent text-base-800 hover:bg-base-800 hover:text-cream",
        variant === "outline" &&
          "border border-hairline bg-transparent text-base-800 hover:border-base-800",
        variant === "ghost" &&
          "bg-transparent text-base-800 hover:bg-cream-200",
        size === "sm" && "px-4 py-2 text-xs uppercase tracking-widest",
        size === "md" && "px-6 py-3 text-sm uppercase tracking-widest",
        size === "lg" && "px-8 py-4 text-sm uppercase tracking-widest",
        size === "icon" && "h-10 w-10 p-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
