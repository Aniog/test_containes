import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const styles = {
  primary: 'inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600-dark focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
  secondary: 'inline-flex items-center justify-center rounded-full border border-slate-950/15 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
  light: 'inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950',
  ghostLight: 'inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950',
}

export default function ButtonLink({ to, children, variant = 'primary', className = '', ...props }) {
  return (
    <Link to={to} className={cn(styles[variant], className)} {...props}>
      {children}
    </Link>
  )
}
