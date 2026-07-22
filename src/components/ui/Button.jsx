import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-gold text-ivory hover:bg-gold-deep",
  outline:
    "border border-ink/30 text-ink hover:border-gold hover:text-gold",
  outlineLight:
    "border border-ivory/40 text-ivory hover:border-gold hover:text-gold",
  solidLight:
    "bg-ivory text-ink hover:bg-cream",
  dark: "bg-espresso text-ivory hover:bg-ink",
};

const sizes = {
  sm: "px-6 py-2.5 text-[11px]",
  md: "px-8 py-3.5 text-xs",
  lg: "px-10 py-4 text-xs",
};

export default function Button({
  as: As = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center rounded-full font-sans font-medium uppercase tracking-widest2 transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </As>
  );
}
