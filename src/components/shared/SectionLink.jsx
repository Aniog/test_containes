import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SectionLink = ({ to, children, light = false }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] transition-colors duration-300 ${
        light ? 'text-amber-300 hover:text-white' : 'text-champagne hover:text-velvet'
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

export default SectionLink
