import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-brand-amber text-white hover:bg-brand-amber-600 shadow-sm',
  secondary:
    'bg-brand-navy text-white hover:bg-brand-navy-700 shadow-sm',
  outline:
    'border border-slate-300 text-brand-ink hover:bg-slate-50 bg-white',
  ghostLight:
    'border border-white/40 text-white hover:bg-white/10 bg-transparent',
}

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
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
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
