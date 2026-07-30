import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '', showArrow = true }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200'
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-red-700 shadow-md hover:shadow-lg',
    secondary: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
    white: 'bg-white text-brand-blue hover:bg-gray-50 shadow-md',
    'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-brand-blue',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  )
}
