import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-champagne text-ivory hover:bg-ink",
  primaryDark:
    "bg-ivory text-ink hover:bg-champagne hover:text-ivory",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-ivory",
  outlineLight:
    "border border-ivory text-ivory hover:bg-ivory hover:text-ink",
  ghost:
    "text-ink hover:text-champagne",
};

const SIZES = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-7 py-3.5 text-[11px]",
  lg: "px-9 py-4 text-xs",
};

export default function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 uppercase tracking-[0.22em] font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
