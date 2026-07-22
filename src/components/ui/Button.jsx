import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", size = "md", children, ...props }) {
  const base =
    "inline-flex items-center justify-center font-manrope uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-gold text-ivory hover:bg-gold-dark",
    outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory",
    "outline-light": "border border-ivory text-ivory hover:bg-ivory hover:text-charcoal",
    ghost: "text-charcoal hover:text-gold",
    "ghost-light": "text-ivory hover:text-gold-light",
  };

  const sizes = {
    sm: "text-[10px] px-5 py-2",
    md: "text-xs px-8 py-3",
    lg: "text-xs px-10 py-4",
    icon: "w-10 h-10",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
