import { Link } from 'react-router-dom'

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-block font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-center'
  const variants = {
    primary: 'bg-[#C0392B] hover:bg-[#A93226] text-white',
    secondary: 'border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white',
    outline_white: 'border-2 border-white text-white hover:bg-white hover:text-[#1A3C6E]',
  }
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
