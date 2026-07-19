import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const baseClasses =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-luxe transition duration-300 disabled:pointer-events-none disabled:opacity-50"

export function Button({ className, variant = "primary", children, ...props }) {
  return (
    <button
      className={cn(
        baseClasses,
        variant === "primary" &&
          "bg-velmora-gold text-velmora-ink shadow-glow hover:-translate-y-0.5 hover:bg-velmora-champagne",
        variant === "outline" &&
          "border border-velmora-hairline bg-transparent text-velmora-ink hover:-translate-y-0.5 hover:border-velmora-gold hover:bg-velmora-parchment",
        variant === "dark" &&
          "border border-velmora-champagne/40 bg-velmora-ink text-velmora-cream hover:-translate-y-0.5 hover:bg-velmora-espresso",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonLink({ to, className, variant = "primary", children, ...props }) {
  return (
    <Link
      to={to}
      className={cn(
        baseClasses,
        variant === "primary" &&
          "bg-velmora-gold text-velmora-ink shadow-glow hover:-translate-y-0.5 hover:bg-velmora-champagne",
        variant === "outline" &&
          "border border-velmora-hairline bg-transparent text-velmora-ink hover:-translate-y-0.5 hover:border-velmora-gold hover:bg-velmora-parchment",
        variant === "dark" &&
          "border border-velmora-champagne/40 bg-velmora-ink text-velmora-cream hover:-translate-y-0.5 hover:bg-velmora-espresso",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
