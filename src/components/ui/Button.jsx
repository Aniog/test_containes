import { cn } from "@/lib/utils";

export function Button({ children, variant = "primary", className = "", onClick, type = "button", disabled = false }) {
  const base = "inline-flex items-center justify-center font-sans text-xs tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-ink text-cream px-8 py-3 hover:bg-gold hover:text-ink border border-ink hover:border-gold",
    secondary: "border border-ink text-ink px-8 py-3 hover:bg-ink hover:text-cream bg-transparent",
    gold: "bg-gold text-ink px-8 py-3 hover:bg-gold-dark border border-gold hover:border-gold-dark",
    ghost: "text-ink px-4 py-2 hover:text-gold bg-transparent border-0",
    outline: "border border-hairline text-taupe px-6 py-2 hover:border-ink hover:text-ink bg-transparent",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </button>
  );
}
