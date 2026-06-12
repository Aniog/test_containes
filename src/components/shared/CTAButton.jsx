import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-200'
  const variants = {
    primary: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30',
    secondary: 'border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white',
    white: 'bg-white text-navy-900 hover:bg-slate-50 shadow-lg',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}
