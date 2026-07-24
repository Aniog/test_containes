import { cn } from "@/lib/utils";

const variantClasses = {
  primary: "bg-ink text-paper hover:bg-ink-soft",
  accent: "bg-gold text-paper hover:bg-gold-deep",
  outline: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper",
  outlineLight: "bg-transparent text-paper border border-paper/70 hover:bg-paper hover:text-ink",
  ghost: "bg-transparent text-ink hover:text-gold-deep",
};

const sizeClasses = {
  md: "h-12 px-8 text-[12px]",
  sm: "h-10 px-5 text-[11px]",
  lg: "h-14 px-10 text-[12px]",
};

export function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className,
  fullWidth = false,
  type = "button",
  children,
  ...props
}) {
  return (
    <Tag
      type={Tag === "button" ? type : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-ui font-medium transition-colors duration-300",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
