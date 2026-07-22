import { cn } from "@/lib/utils";

/**
 * Two flavors of button: solid champagne, or ghost on cream.
 * Always uppercase, wide letter-spacing, no rounded-full.
 */
const variants = {
  primary:
    "bg-champagne text-espresso hover:bg-champagne-deep transition-colors duration-500 ease-elegant",
  ghost:
    "bg-transparent text-espresso border border-espresso/30 hover:bg-cream-deep transition-colors duration-500 ease-elegant",
  ghostLight:
    "bg-transparent text-cream border border-cream/40 hover:bg-cream/10 transition-colors duration-500 ease-elegant",
  onDark:
    "bg-cream text-espresso hover:bg-ivory transition-colors duration-500 ease-elegant",
};

const sizes = {
  md: "px-7 py-3 text-xs",
  lg: "px-9 py-4 text-xs",
  sm: "px-5 py-2.5 text-[11px]",
  block: "w-full px-9 py-4 text-xs",
};

export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 uppercase tracking-label font-medium rounded-none select-none",
        "disabled:opacity-70 disabled:cursor-not-allowed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
