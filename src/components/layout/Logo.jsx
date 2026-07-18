import { Link } from 'react-router-dom'

const Logo = ({ className = '' }) => {
  const homePath = '/'

  return (
    <Link
      to={homePath}
      className={`font-display text-2xl tracking-[0.45em] text-inherit transition-opacity duration-300 hover:opacity-70 ${className}`}
    >
      VELMORA
    </Link>
  )
}

export default Logo
