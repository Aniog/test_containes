import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[#0c2240] shadow-sm",
  accent:
    "bg-accent text-accent-foreground hover:bg-[#c87a14] shadow-sm",
  outline:
    "border border-border bg-card text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
  white:
    "bg-white text-primary hover:bg-muted shadow-sm",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
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
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
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
