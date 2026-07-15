import { cn } from "@/lib/utils";

export function Button({
  children,
  variant = "primary",
  className,
  fullWidth = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-xs font-medium uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-gold text-ivory hover:bg-gold-dark disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border border-espresso text-espresso bg-transparent hover:bg-espresso hover:text-ivory disabled:opacity-50",
    ghost:
      "text-espresso hover:text-gold underline-offset-4 hover:underline disabled:opacity-50",
  };
  return (
    <button
      className={cn(base, variants[variant], fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
}
