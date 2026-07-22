import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const baseClass = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-ivory disabled:pointer-events-none disabled:opacity-50'

export default function VelmoraButton({ children, to, variant = 'primary', className = '', ...props }) {
  const variantClass =
    variant === 'outline'
      ? 'border border-velmora-espresso/25 bg-transparent text-velmora-espresso hover:border-velmora-gold hover:text-velmora-burnished'
      : variant === 'light'
        ? 'border border-velmora-ivory/40 bg-velmora-ivory text-velmora-espresso hover:bg-velmora-champagne'
        : 'border border-velmora-gold bg-velmora-gold text-velmora-espresso hover:border-velmora-burnished hover:bg-velmora-burnished hover:text-velmora-ivory'

  const classes = cn(baseClass, variantClass, className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
