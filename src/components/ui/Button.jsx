import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center font-sans uppercase tracking-[0.15em] text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"

const variants = {
  primary: "bg-gold text-ivory hover:bg-gold-dark px-8 py-4",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ivory px-8 py-4",
  outlineLight: "border border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso px-8 py-4",
  ghost: "text-ink hover:text-gold px-2 py-1",
}

export default function Button({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = cn(base, variants[variant] || variants.primary, className)

  if (as === "link") {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (as === "a") {
    return (
      <a className={classes} {...props}>
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
