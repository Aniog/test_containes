import React from 'react'
import { cn } from '@/lib/utils'

export const Button = React.forwardRef(function Button(
  { className, variant = 'primary', size = 'md', children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2',
        {
          'bg-velmora-gold text-white hover:bg-velmora-gold-hover':
            variant === 'primary',
          'bg-transparent border border-velmora-charcoal text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white':
            variant === 'outline',
          'bg-velmora-charcoal text-white hover:bg-black':
            variant === 'dark',
          'bg-transparent text-velmora-charcoal underline-offset-4 hover:underline':
            variant === 'ghost',
        },
        {
          'px-5 py-2.5 text-sm': size === 'sm',
          'px-7 py-3.5 text-sm': size === 'md',
          'px-10 py-4 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})
