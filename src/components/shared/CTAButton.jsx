import { Link } from 'react-router-dom'

const baseClasses = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-brand-blue/20'

export default function CTAButton({ children, href = '/contact', variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-brand-blue text-white shadow-sm hover:bg-brand-navy',
    secondary: 'border border-brand-line bg-white text-brand-navy hover:border-brand-blue hover:text-brand-blue',
    dark: 'bg-brand-navy text-white hover:bg-brand-blue',
  }

  return (
    <Link className={`${baseClasses} ${variants[variant]} ${className}`} to={href} {...props}>
      {children}
    </Link>
  )
}
