import { cloneElement, isValidElement } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-velmora-espresso text-velmora-porcelain border-velmora-espresso hover:bg-velmora-smoke hover:border-velmora-smoke',
  accent: 'bg-velmora-champagne text-velmora-espresso border-velmora-champagne hover:bg-velmora-espresso hover:text-velmora-porcelain hover:border-velmora-espresso',
  outline: 'bg-transparent text-current border-current hover:bg-velmora-espresso hover:text-velmora-porcelain hover:border-velmora-espresso',
  ghost: 'bg-transparent text-current border-transparent hover:bg-velmora-blush',
}

const buttonClasses = (variant, className) => cn(
  'inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-luxury transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-velmora-champagne disabled:cursor-not-allowed disabled:opacity-60',
  variants[variant],
  className,
)

export default function Button({ children, className, variant = 'primary', asChild = false, ...props }) {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: cn(buttonClasses(variant, className), children.props.className),
      ...props,
    })
  }

  return (
    <button className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  )
}
