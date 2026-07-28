import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-brand-red text-white hover:bg-brand-redDark shadow-sm",
  secondary:
    "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
  ghost:
    "text-brand-navy hover:text-brand-red",
  white:
    "bg-white text-brand-navy hover:bg-brand-surface",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
