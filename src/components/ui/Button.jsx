import { cloneElement, isValidElement } from 'react'
import { cn } from '@/lib/utils'

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  className,
  fullWidth,
  disabled,
  asChild,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center uppercase tracking-widest text-xs font-medium transition-all duration-300 ease-out',
    variant === 'solid' &&
      'bg-gold text-cream hover:bg-ink disabled:opacity-50',
    variant === 'outline' &&
      'border border-ink text-ink bg-transparent hover:bg-ink hover:text-cream disabled:opacity-50',
    variant === 'ghost' &&
      'bg-transparent text-ink hover:text-gold underline-offset-4 hover:underline',
    size === 'sm' && 'px-4 py-2',
    size === 'md' && 'px-6 py-3',
    size === 'lg' && 'px-8 py-4',
    fullWidth && 'w-full',
    className,
  )

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: cn(classes, children.props.className),
      disabled,
      ...props,
    })
  }

  return (
    <button disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  )
}
