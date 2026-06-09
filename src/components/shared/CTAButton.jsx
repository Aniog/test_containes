import { Link } from 'react-router-dom'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200'
  const variants = {
    primary: 'bg-[#e86c2b] hover:bg-[#d45a1a] text-white shadow-sm hover:shadow-md',
    secondary: 'border-2 border-[#1a3a5c] text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white',
    white: 'bg-white text-[#0f2a4a] hover:bg-slate-100 shadow-sm',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
