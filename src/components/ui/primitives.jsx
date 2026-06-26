import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export function Button({ as, to, href, variant = "primary", className, children, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    secondary: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
    ghost: "text-slate-700 hover:bg-slate-100",
    light: "bg-white text-blue-700 hover:bg-blue-50",
    outlineLight: "border border-white/40 text-white hover:bg-white/10",
  }
  const classes = cn(base, variants[variant], className)

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

export function SectionEyebrow({ children, className }) {
  return (
    <p className={cn("text-sm font-semibold uppercase tracking-wider text-blue-700", className)}>
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow && <SectionEyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</SectionEyebrow>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
      )}
    </div>
  )
}

export function Container({ className, children }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
}

export function Card({ className, children }) {
  return (
    <div className={cn("rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8", className)}>
      {children}
    </div>
  )
}
