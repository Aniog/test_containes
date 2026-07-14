import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-label transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variants = {
  solid:
    'bg-velmora-gold text-velmora-ink shadow-sm hover:-translate-y-0.5 hover:bg-velmora-goldDark hover:text-velmora-pearl focus-visible:outline-velmora-goldDark',
  dark:
    'bg-velmora-ink text-velmora-pearl hover:-translate-y-0.5 hover:bg-velmora-cocoa focus-visible:outline-velmora-gold',
  outline:
    'border border-velmora-ink/25 bg-transparent text-velmora-ink hover:-translate-y-0.5 hover:border-velmora-goldDark hover:bg-velmora-pearl focus-visible:outline-velmora-goldDark',
  ghost:
    'text-velmora-ink hover:bg-velmora-champagne/60 focus-visible:outline-velmora-goldDark',
}

export default function Button({ children, className, variant = 'solid', to, ...props }) {
  const classes = cn(baseClasses, variants[variant], className)

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
