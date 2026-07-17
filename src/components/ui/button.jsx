import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-espresso text-cream hover:bg-bronze hover:text-white border border-espresso hover:border-bronze",
  accent:
    "bg-bronze text-white hover:bg-espresso border border-bronze hover:border-espresso",
  outline:
    "bg-transparent text-espresso border border-espresso hover:bg-espresso hover:text-cream",
  outlineLight:
    "bg-transparent text-cream border border-cream/70 hover:bg-cream hover:text-espresso",
  ghost: "bg-transparent text-espresso hover:text-bronze border border-transparent",
};

const sizes = {
  sm: "h-9 px-5 text-[11px]",
  md: "h-12 px-8 text-xs",
  lg: "h-14 px-10 text-xs",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 uppercase tracking-luxe font-sans font-medium",
        "transition-all duration-300 ease-luxe disabled:opacity-50 disabled:pointer-events-none",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
