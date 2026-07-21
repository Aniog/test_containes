import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center uppercase tracking-wide2 text-xs font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"

const variants = {
  // Solid espresso — primary CTA
  solid: "bg-espresso text-cream hover:bg-ink px-8 py-4",
  // Solid gold — accent CTA
  gold: "bg-gold text-cream hover:bg-gold-soft px-8 py-4",
  // Outlined on light
  outline: "border border-ink text-ink hover:bg-espresso hover:text-cream px-8 py-4",
  // Outlined on dark
  outlineLight: "border border-cream/70 text-cream hover:bg-cream hover:text-espresso px-8 py-4",
  // Ghost / link
  ghost: "text-ink hover:text-gold px-0 py-1",
}

export function Button({
  as = "button",
  to,
  href,
  variant = "solid",
  className,
  children,
  ...rest
}) {
  const classes = cn(base, variants[variant] || variants.solid, className)

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
