import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-[#0B2545] text-white hover:bg-[#0A1F38] shadow-sm",
  accent:
    "bg-[#1B6CA8] text-white hover:bg-[#155A8A] shadow-sm",
  outline:
    "border border-slate-300 text-[#0B2545] bg-white hover:bg-slate-50",
  outlineLight:
    "border border-white/40 text-white bg-transparent hover:bg-white/10",
  ghost: "text-[#1B6CA8] hover:text-[#155A8A] bg-transparent",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
}

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6CA8] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
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

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
