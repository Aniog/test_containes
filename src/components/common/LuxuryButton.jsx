import { Link } from 'react-router-dom'

const styles = {
  solid:
    'bg-velmora-champagne text-velmora-ink border-velmora-champagne hover:bg-velmora-antique hover:border-velmora-antique hover:text-velmora-cream shadow-glow',
  outline:
    'bg-transparent text-current border-current hover:bg-velmora-ink hover:border-velmora-ink hover:text-velmora-cream',
  dark:
    'bg-velmora-ink text-velmora-cream border-velmora-ink hover:bg-velmora-espresso hover:border-velmora-espresso',
}

export default function LuxuryButton({
  children,
  to,
  variant = 'solid',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center border px-6 py-3 text-xs font-bold uppercase tracking-luxury transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
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
