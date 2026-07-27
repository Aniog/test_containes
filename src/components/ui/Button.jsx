import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

const variantStyles = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 focus:ring-2 focus:ring-accent-500/40 shadow-sm",
  secondary:
    "bg-white text-navy-600 border border-navy-600 hover:bg-navy-50 focus:ring-2 focus:ring-navy-600/30",
  navy:
    "bg-navy-600 text-white hover:bg-navy-700 focus:ring-2 focus:ring-navy-600/40 shadow-sm",
  ghost:
    "bg-transparent text-navy-600 hover:text-accent-500 hover:bg-slate-100",
  outlineLight:
    "bg-transparent text-white border border-white/70 hover:bg-white/10 focus:ring-2 focus:ring-white/40",
}

const sizeStyles = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  xl: "h-14 px-8 text-base",
}

export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  type = "button",
  className,
  children,
  ...rest
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  )
}
