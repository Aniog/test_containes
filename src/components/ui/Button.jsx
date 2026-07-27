import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-accent disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-action text-white hover:bg-action-dark',
  navy: 'bg-primary text-white hover:bg-primary-accent',
  outline:
    'border border-primary text-primary bg-white hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-slate-100',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  size = 'md',
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

  const Component = as
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
