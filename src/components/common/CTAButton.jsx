import { Link } from 'react-router-dom'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-amber-500/30'
  const styles = variant === 'secondary'
    ? 'border border-white/30 bg-white/10 text-white hover:bg-white/20'
    : 'bg-amber-500 text-slate-900 shadow-xl hover:bg-amber-600'

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  )
}
