import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-velmora-accent text-white hover:bg-velmora-accent-hover focus:ring-velmora-accent",
  outline:
    "border border-velmora-fg bg-transparent text-velmora-fg hover:bg-velmora-fg hover:text-white focus:ring-velmora-fg",
  ghost:
    "bg-transparent text-velmora-fg hover:bg-velmora-cream focus:ring-velmora-muted",
  link: "bg-transparent text-velmora-fg underline-offset-4 hover:underline p-0 h-auto",
};

const sizeStyles = {
  default: "px-8 py-3 text-xs",
  sm: "px-5 py-2 text-xs",
  lg: "px-10 py-4 text-sm",
  icon: "p-2",
};

export function Button({
  className,
  variant = "primary",
  size = "default",
  asChild,
  children,
  ...props
}) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center font-medium uppercase tracking-widest transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant !== "link" && sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
