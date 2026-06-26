import { cn } from "@/lib/utils";

/**
 * Button
 * Variants:
 *   - primary  (filled navy)
 *   - accent   (filled copper)
 *   - outline  (border only)
 *   - ghost    (text only)
 */
export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-[#16365a] active:bg-[#0a1f37]",
    accent:
      "bg-accent text-accent-foreground hover:bg-[#b89255] active:bg-[#a4824a]",
    outline:
      "border border-foreground/25 text-foreground hover:bg-foreground/5 active:bg-foreground/10",
    ghost: "text-foreground hover:bg-foreground/5",
  };

  return (
    <Tag
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}