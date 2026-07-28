import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-brand-500 text-white hover:bg-brand-600 shadow-sm': variant === 'default',
          'bg-accent-500 text-white hover:bg-accent-600 shadow-sm': variant === 'accent',
          'bg-white text-brand-500 border border-brand-200 hover:bg-brand-50 hover:text-brand-600': variant === 'outline',
          'bg-brand-50 text-brand-600 hover:bg-brand-100': variant === 'secondary',
          'hover:bg-gray-100 text-gray-700': variant === 'ghost',
          'h-10 px-4 py-2': size === 'default',
          'h-9 rounded-md px-3': size === 'sm',
          'h-12 rounded-md px-8 text-base': size === 'lg',
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button }