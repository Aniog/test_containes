import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export function Button({ as, to, href, variant = "primary", size = "md", className, children, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  }
  const variants = {
    primary: "bg-brand-700 text-white hover:bg-brand-800 shadow-sm",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
    outline: "bg-transparent text-brand-700 border border-brand-700 hover:bg-brand-50",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
    dark: "bg-slate-900 text-white hover:bg-slate-800",
  }
  const classes = cn(base, sizes[size], variants[variant], className)

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
