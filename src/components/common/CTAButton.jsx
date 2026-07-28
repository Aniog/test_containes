import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-blue-700 text-white shadow-sm hover:bg-blue-800 focus-visible:ring-blue-700',
  secondary: 'bg-white text-blue-800 ring-1 ring-inset ring-blue-200 hover:bg-blue-50 focus-visible:ring-blue-700',
  dark: 'bg-white text-slate-950 hover:bg-blue-50 focus-visible:ring-white',
}

const CTAButton = ({ children, href = '/contact', variant = 'primary', className = '', ...props }) => (
  <Link
    to={href}
    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </Link>
)

export default CTAButton
