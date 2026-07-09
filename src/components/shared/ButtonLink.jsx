import { Link } from 'react-router-dom'

const ButtonLink = ({ to, children, variant = 'primary', className = '' }) => {
  const baseClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary'

  return (
    <Link className={`${baseClass} ${className}`.trim()} to={to}>
      {children}
    </Link>
  )
}

export default ButtonLink
