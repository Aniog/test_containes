import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'btn-primary',
  accent: 'btn-accent',
  outline: 'btn-outline',
}

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  className,
  children,
  ...props
}) {
  const classes = cn(variants[variant] || variants.primary, className)

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
    <button as={as} className={classes} {...props}>
      {children}
    </button>
  )
}
