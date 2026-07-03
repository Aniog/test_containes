import { cn } from "../../lib/cn.js";

const VARIANTS = {
  primary:
    "bg-gold-400 text-ink-950 hover:bg-gold-300 border border-gold-400",
  outline:
    "bg-transparent text-gold-300 border border-gold-600 hover:bg-ink-800 hover:text-gold-200",
  ghost:
    "bg-transparent text-ink-100 hover:text-gold-300 border border-transparent",
  dark:
    "bg-ink-950 text-ink-100 border border-ink-700 hover:border-gold-500 hover:text-gold-300",
  light:
    "bg-ink-100 text-ink-950 border border-ink-100 hover:bg-ink-200",
};

const SIZES = {
  sm: "h-9 px-5 text-[10px]",
  md: "h-11 px-7 text-[11px]",
  lg: "h-12 px-9 text-[12px]",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium uppercase tracking-wider2 transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
