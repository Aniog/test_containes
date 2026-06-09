import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2'

const variants = {
  primary: 'bg-sky-700 text-white hover:bg-sky-800',
  secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
  dark: 'bg-slate-950 text-white hover:bg-slate-800',
}

const CTAButton = ({
  children,
  to,
  href,
  variant = 'primary',
  className,
  arrow = false,
}) => {
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowRight className="h-4 w-4" /> : null}
    </>
  )

  const classes = cn(baseClasses, variants[variant], className)

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classes} href={href}>
      {content}
    </a>
  )
}

export default CTAButton
