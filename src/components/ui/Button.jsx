import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-ink text-cream-soft hover:bg-ink-soft border border-ink hover:border-brass",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream-soft",
  ghost: "bg-transparent text-ink hover:text-brass",
  accent:
    "bg-brass text-ink hover:bg-brass-deep hover:text-cream-soft border border-brass hover:border-brass-deep",
};

const sizes = {
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-sm",
  sm: "px-5 py-2.5 text-xs",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  arrow = false,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-3 font-medium uppercase tracking-wider2 transition-all duration-300 ease-out rounded-sm",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      {arrow && (
        <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Tag>
  );
}
