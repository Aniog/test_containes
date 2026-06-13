import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const baseClassName =
  'inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800'

const PrimaryCta = ({ to = '/contact', children = 'Get a Free Sourcing Quote' }) => {
  return (
    <Link className={baseClassName} to={to}>
      <span>{children}</span>
      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

export default PrimaryCta
