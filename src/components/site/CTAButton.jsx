import { Link } from 'react-router-dom'

const CTAButton = ({ children, to = '/contact', variant = 'primary', className = '', ...props }) => {
  const styles = variant === 'secondary'
    ? 'border border-brand-border bg-white text-brand-navy hover:border-brand-blue hover:text-brand-blue'
    : 'bg-brand-amber text-brand-navy shadow-card hover:bg-brand-amber/90'

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CTAButton
