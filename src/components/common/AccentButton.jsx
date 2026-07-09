import { Link } from 'react-router-dom'

const baseClass = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-60'
const variants = {
  solid: 'bg-velmora-champagne text-velmora-espresso shadow-glow hover:-translate-y-0.5 hover:bg-velmora-sand',
  outline: 'border border-velmora-champagne text-velmora-espresso hover:bg-velmora-champagne hover:text-velmora-espresso',
  darkOutline: 'border border-white/55 bg-velmora-espresso/35 text-white shadow-lg backdrop-blur-sm hover:border-velmora-champagne hover:bg-velmora-champagne hover:text-velmora-espresso',
}

export default function AccentButton({ children, to, className = '', variant = 'solid', ...props }) {
  const classes = `${baseClass} ${variants[variant]} ${className}`
  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }
  return <button className={classes} {...props}>{children}</button>
}
