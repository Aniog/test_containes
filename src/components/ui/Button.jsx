import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center font-sans uppercase tracking-[0.2em] text-xs transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"

const variants = {
  primary: "bg-gold text-ivory hover:bg-gold-deep",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
  outlineLight: "border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink",
  ghost: "text-ink hover:text-gold-deep",
}

const sizes = {
  sm: "px-5 py-2.5",
  md: "px-8 py-4",
  lg: "px-10 py-5",
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
  const Comp = as
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  )
}
