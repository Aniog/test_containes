import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'accent', size = 'md', showArrow = false, className = '' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  const variants = {
    accent: 'bg-accent-500 hover:bg-accent-400 text-white',
    primary: 'bg-brand-700 hover:bg-brand-600 text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-brand-700',
    'outline-dark': 'border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white',
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 font-semibold rounded-lg transition-colors ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  )
}
