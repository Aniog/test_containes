import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link
      to="/"
      className="font-editorial text-2xl tracking-[0.35em] text-inherit transition-opacity duration-300 hover:opacity-80"
      aria-label="Velmora Fine Jewelry home"
    >
      VELMORA
    </Link>
  )
}

export default Logo
