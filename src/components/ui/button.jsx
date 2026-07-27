import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"

const variants = {
  primary: "bg-accent text-white hover:bg-accent-600 px-6 py-3",
  secondary: "bg-brand text-white hover:bg-brand-600 px-6 py-3",
  outline:
    "border border-slate-300 text-ink bg-white hover:bg-slate-50 px-6 py-3",
  ghostLight:
    "border border-white/40 text-white hover:bg-white/10 px-6 py-3",
}

const sizes = {
  md: "text-sm",
  lg: "text-base",
}

export function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
