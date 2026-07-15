import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-velmora-espresso text-velmora-cream hover:bg-velmora-gold',
  secondary: 'border border-velmora-sand bg-transparent text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold',
  ghost: 'bg-transparent text-velmora-ink hover:bg-velmora-goldSoft/15',
}

const sizes = {
  default: 'px-6 py-3',
  sm: 'px-4 py-2.5 text-xs',
  icon: 'h-11 w-11 p-0',
}

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Component = asChild ? 'span' : 'button'

    return (
      <Component
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full text-sm font-medium tracking-[0.14em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export default Button
