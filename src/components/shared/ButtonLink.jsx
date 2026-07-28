import { Link } from 'react-router-dom'

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-200'

const variants = {
  primary: 'bg-emerald-600 text-white hover:bg-emerald-500',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50',
  dark: 'border border-white/15 bg-white/10 text-white hover:bg-white/15',
}

function ButtonLink({ to, children, variant = 'primary', className = '' }) {
  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]} ${className}`.trim()}>
      {children}
    </Link>
  )
}

export default ButtonLink
