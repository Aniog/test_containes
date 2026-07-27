import { Link } from 'react-router-dom'

const CTAButton = ({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) => {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-colors no-underline'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    white: 'bg-white text-navy hover:bg-white/90',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}

export default CTAButton
