import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-brand-gold text-brand-ink shadow-soft hover:bg-brand-goldDeep hover:text-brand-parchment',
  secondary:
    'border border-brand-line bg-transparent text-brand-ink hover:bg-brand-ink hover:text-brand-parchment',
  ghost:
    'bg-white/10 text-brand-parchment backdrop-blur hover:bg-white/20',
}

export const Button = ({
  as = 'button',
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  const classes = cn(baseStyles, variants[variant], className)

  if (as === 'link') {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    )
  }

  const Component = as

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
