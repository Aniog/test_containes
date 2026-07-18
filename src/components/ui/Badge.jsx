import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default", className = "" }) {
  const base = "inline-flex items-center font-sans text-[10px] tracking-widest uppercase px-2 py-0.5";

  const variants = {
    default: "bg-champagne text-ink",
    gold: "bg-gold text-ink",
    dark: "bg-ink text-cream",
    outline: "border border-hairline text-taupe",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
