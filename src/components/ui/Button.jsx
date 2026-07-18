import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const buttonStyles = {
  primary:
    'bg-velmora-gold text-velmora-ink hover:bg-velmora-champagne shadow-[0_14px_34px_rgba(184,149,93,0.18)]',
  secondary:
    'border border-velmora-line-dark/20 bg-transparent text-velmora-porcelain hover:border-velmora-gold hover:text-velmora-champagne',
  light:
    'border border-velmora-line bg-velmora-porcelain text-velmora-ink hover:bg-velmora-parchment',
}

export function Button({
  as = 'button',
  href,
  className,
  variant = 'primary',
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition duration-300',
    buttonStyles[variant],
    className,
  )

  if (as === 'link') {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
