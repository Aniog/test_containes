import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center font-sans uppercase tracking-[0.18em] text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  solid:
    "bg-gold text-ivory hover:bg-gold-deep border border-gold hover:border-gold-deep",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-ivory",
  outlineLight:
    "bg-transparent text-ivory border border-ivory/70 hover:bg-ivory hover:text-ink",
  ghost: "bg-transparent text-ink hover:text-gold border border-transparent",
};

const sizes = {
  sm: "px-5 py-2.5",
  md: "px-7 py-3.5",
  lg: "px-9 py-4",
};

export function Button({
  as: As = "button",
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <As
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </As>
  );
}
