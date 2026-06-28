import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.22em] text-[11px] md:text-xs transition-colors duration-300 ease-out focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

const sizes = {
  sm: "px-5 py-2.5",
  md: "px-7 py-3.5",
  lg: "px-9 py-4",
  block: "w-full px-7 py-4",
};

const variants = {
  primary:
    "bg-onyx text-ivory hover:bg-espresso",
  accent:
    "bg-gold text-onyx hover:bg-gold-deep hover:text-ivory",
  outline:
    "border border-onyx text-onyx hover:bg-onyx hover:text-ivory",
  outlineLight:
    "border border-ivory/60 text-ivory hover:bg-ivory hover:text-onyx",
  ghost:
    "text-onyx hover:text-gold",
};

export function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) {
  return (
    <Comp
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
