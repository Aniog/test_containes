import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 text-base shadow-sm",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-hover px-6 py-3 text-base shadow-sm",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 text-base",
  ghost: "text-primary hover:bg-primary/10 px-4 py-2 text-base",
  white:
    "bg-white text-primary hover:bg-slate-100 px-6 py-3 text-base shadow-sm",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className,
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
