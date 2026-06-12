import { Link } from 'react-router-dom'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center font-semibold px-6 py-3 rounded-lg text-base transition-colors'
  const variants = {
    primary: 'bg-accent-500 hover:bg-accent-600 text-white',
    secondary: 'border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white',
    white: 'bg-white text-navy-900 hover:bg-slate-100',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
