import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center uppercase tracking-widest3 text-xs md:text-sm font-medium transition-all duration-300 ease-luxe disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  solid: 'bg-gold text-cream hover:bg-gold-deep px-8 py-4',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-cream px-8 py-4',
  outlineLight: 'border border-cream/50 text-cream hover:bg-cream hover:text-ink px-8 py-4',
  ghost: 'text-ink hover:text-gold px-2 py-1',
}

const sizes = {
  md: 'px-8 py-4',
  sm: 'px-6 py-3 text-xs',
}

export function Button({ to, href, variant = 'solid', size, className, children, ...props }) {
  const classes = cn(base, variants[variant] || variants.solid, size && sizes[size], className)

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
