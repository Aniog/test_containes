import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', size = 'md', showArrow = false, className = '' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  const variants = {
    primary: 'bg-brand-700 hover:bg-brand-800 text-white',
    secondary: 'border-2 border-brand-700 text-brand-700 hover:bg-brand-50',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white',
    white: 'bg-white hover:bg-neutral-50 text-brand-700',
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 font-semibold rounded-lg transition-all ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  )
}
