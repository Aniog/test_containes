import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm',
  navy:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
  outline:
    'border border-primary text-primary bg-transparent hover:bg-primary/5',
  ghost:
    'text-primary hover:bg-primary/5',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-8 text-base',
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
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
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
