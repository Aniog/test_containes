import { cn } from "@/lib/utils";

export function Badge({ className, children, variant = "default", ...props }) {
  const variants = {
    default: "bg-gold-600 text-white",
    secondary: "bg-cream-200 text-warm-800",
    outline: "border border-warm-300 text-warm-700 bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] font-sans font-medium tracking-wider uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}