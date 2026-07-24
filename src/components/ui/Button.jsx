import * as React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = {
  default: 'bg-accent text-white hover:bg-accent/90',
  outline: 'border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background',
  ghost: 'hover:bg-muted text-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
}

const buttonSizes = {
  default: 'h-11 px-6 py-2',
  sm: 'h-9 px-4 text-sm',
  lg: 'h-12 px-8 text-base',
  icon: 'h-10 w-10',
  'icon-lg': 'h-12 w-12',
}

export const Button = React.forwardRef(function Button(
  { className, variant = 'default', size = 'default', asChild = false, children, ...props },
  ref
) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      className: cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        buttonVariants[variant],
        buttonSizes[size],
        className,
        children.props.className
      ),
      ...props,
    })
  }

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})
