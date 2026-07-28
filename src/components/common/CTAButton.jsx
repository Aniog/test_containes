import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-brand-blue/20'
const variants = {
  primary: 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-navy',
  secondary: 'border border-brand-line bg-white text-brand-navy hover:border-brand-blue hover:text-brand-blue',
  dark: 'bg-white text-brand-navy hover:bg-brand-sky',
}

export default function CTAButton({ to = '/contact', children, variant = 'primary', className = '', onClick }) {
  return (
    <Link className={`${baseClasses} ${variants[variant]} ${className}`} to={to} onClick={onClick}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}
