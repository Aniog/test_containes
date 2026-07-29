import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CTAButton = ({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary' }) => {
  const classes =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-slate-900 hover:border-blue-700 hover:text-blue-700'
      : 'bg-blue-700 text-white shadow-soft hover:bg-slate-900'

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${classes}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

export default CTAButton
