import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-ink text-cream hover:bg-gold-600",
  gold: "bg-gold text-cream hover:bg-gold-600",
  outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
  ghost: "text-ink hover:text-gold-600",
};

const sizes = {
  md: "px-7 py-3.5 text-[11px]",
  lg: "px-9 py-4 text-[12px]",
  sm: "px-5 py-2.5 text-[10px]",
};

export default function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...rest
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 uppercase tracking-widest2 font-medium transition-all duration-500 ease-elegant disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
