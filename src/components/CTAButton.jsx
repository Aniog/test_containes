import { Link } from 'react-router-dom'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-colors'
  const variants = {
    primary: 'bg-china-red text-white hover:bg-china-red-dark',
    secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    white: 'bg-white text-navy hover:bg-light-blue',
    'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-navy',
  }
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
