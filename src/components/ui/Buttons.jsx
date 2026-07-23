import { Link } from 'react-router-dom'

const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50'
const variants = {
  solid: 'bg-velmora-gold text-velmora-pearl shadow-glow hover:bg-velmora-gold-deep',
  dark: 'bg-velmora-ink text-velmora-pearl hover:bg-velmora-charcoal',
  outline: 'border border-velmora-gold/70 text-velmora-ink hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-pearl',
  ghost: 'text-velmora-ink hover:bg-velmora-sand/40',
}

export function Button({ children, className = '', variant = 'solid', ...props }) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>
}

export function ButtonLink({ children, className = '', variant = 'solid', to, ...props }) {
  return <Link to={to} className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</Link>
}
