import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const VARIANTS = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-sm",
  secondary:
    "bg-primary text-white hover:bg-primary-dark",
  outline:
    "border border-slate-300 text-slate-700 bg-transparent hover:border-primary hover:text-primary",
  ghost:
    "bg-transparent text-primary hover:bg-slate-100",
  white:
    "bg-white text-primary hover:bg-slate-100 shadow-sm",
}

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-base",
}

export default function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    VARIANTS[variant],
    SIZES[size],
    className
  )

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

  const Component = as
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
