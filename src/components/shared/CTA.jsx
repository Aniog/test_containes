import { Link } from 'react-router-dom'

const CTA = ({
  to = '/contact',
  variant = 'primary',
  href,
  children,
  className = '',
  ...rest
}) => {
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  if (href) {
    return (
      <a href={href} className={`${cls} ${className}`} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={`${cls} ${className}`} {...rest}>
      {children}
    </Link>
  )
}

export default CTA
