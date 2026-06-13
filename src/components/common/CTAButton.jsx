import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CTAButton({ children = 'Get a Free Sourcing Quote', to = '/contact', variant = 'primary', className = '' }) {
  const styles =
    variant === 'secondary'
      ? 'border border-brand-navy/15 bg-white text-brand-navy hover:border-brand-blue hover:text-brand-blue'
      : 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-navy'

  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles} ${className}`}
      to={to}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}
