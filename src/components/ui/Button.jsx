import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Button = forwardRef(function Button(
  {
    children,
    as: Component = 'button',
    variant = 'primary',
    size = 'md',
    className,
    fullWidth = false,
    ...props
  },
  ref
) {
  return (
    <Component
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/30 disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-gold text-white hover:bg-gold-dark': variant === 'primary',
          'bg-espresso text-cream hover:bg-cocoa': variant === 'dark',
          'bg-transparent border border-espresso text-espresso hover:bg-espresso hover:text-cream': variant === 'outline',
          'bg-transparent border border-cream text-cream hover:bg-cream hover:text-espresso': variant === 'outline-light',
          'bg-transparent text-espresso hover:text-gold underline-offset-4 hover:underline': variant === 'ghost',
        },
        {
          'px-5 py-2.5 text-sm': size === 'sm',
          'px-8 py-3.5 text-sm': size === 'md',
          'px-10 py-4 text-base': size === 'lg',
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
})
