import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-steel text-white hover:bg-steel-dark px-6 py-3',
  accent: 'bg-copper text-white hover:bg-copper-dark px-6 py-3',
  outline:
    'border border-steel text-steel hover:bg-steel hover:text-white px-6 py-3',
  outlineLight:
    'border border-white/30 text-ink-fg hover:bg-white/10 px-6 py-3',
  ghost: 'text-steel hover:text-steel-dark px-3 py-2',
}

export function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant] || variants.primary, className)

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
