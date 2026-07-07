import { cloneElement, isValidElement } from 'react'
import { cn } from '@/lib/utils'

export default function Button({
  children,
  variant = 'primary',
  className,
  asChild,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-hover',
    secondary:
      'border border-ink text-ink bg-transparent hover:bg-ink hover:text-warm-white',
    outlineLight:
      'border border-warm-white/60 text-warm-white bg-transparent hover:bg-warm-white hover:text-ink',
    ghost: 'text-ink hover:text-gold underline-offset-4 hover:underline px-0 py-0',
  }

  const classes = cn(base, variants[variant], className)

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
