import { cn } from "@/lib/utils";

const variants = {
  primary: "btn-primary",
  gold: "btn-gold",
  outline: "btn-outline",
  outlineOnDark: "btn-outline-on-dark",
  ghost:
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-[11px] font-medium uppercase tracking-wider2 text-ink-secondary hover:text-ink transition-colors",
};

const sizes = {
  md: "px-8 py-4",
  lg: "px-10 py-5",
  sm: "px-5 py-2.5",
};

export function Button({
  variant = "primary",
  size,
  className,
  as: Tag = "button",
  children,
  ...rest
}) {
  const base = variants[variant] || variants.primary;
  const sizeCls = sizes[size] || "";
  return (
    <Tag
      className={cn(base, sizeCls, "select-none", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Button;
