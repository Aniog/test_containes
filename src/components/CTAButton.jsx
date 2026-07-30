import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', size = 'md', showArrow = false, className = '' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary: 'bg-amber-600 hover:bg-amber-500 text-white',
    secondary: 'bg-white text-blue-800 border border-blue-800 hover:bg-blue-50',
    ghost: 'border border-white text-white hover:bg-white hover:text-blue-950',
    outline: 'border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
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
