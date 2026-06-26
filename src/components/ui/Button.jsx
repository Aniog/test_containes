import { isValidElement, cloneElement } from 'react'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary: 'bg-navy text-white hover:bg-slate-800 focus:ring-gold',
  accent: 'bg-gold text-navy hover:bg-gold-dark focus:ring-navy/30',
  outline:
    'border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy/30',
  ghost: 'text-navy hover:bg-slate-100 focus:ring-slate-300',
}

export function Button({
  children,
  variant = 'primary',
  className,
  asChild = false,
  ...props
}) {
  const classes = cn(base, variants[variant], className)

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    })
  }

  return (
    <button type='button' className={classes} {...props}>
      {children}
    </button>
  )
}
