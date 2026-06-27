import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary:
        'bg-velmora-charcoal text-velmora-cream hover:bg-velmora-dark active:bg-velmora-charcoal',
      accent:
        'bg-velmora-gold text-velmora-charcoal hover:bg-velmora-gold-dark active:bg-velmora-gold',
      outline:
        'border border-velmora-charcoal/30 bg-transparent text-velmora-charcoal hover:border-velmora-charcoal hover:bg-velmora-charcoal/5',
      ghost:
        'bg-transparent text-velmora-charcoal hover:bg-velmora-charcoal/5',
      link: 'bg-transparent text-velmora-charcoal underline-offset-4 hover:underline p-0 h-auto',
    }

    const sizes = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-5 py-2.5',
      lg: 'text-sm px-8 py-3.5 tracking-wider uppercase',
      xl: 'text-sm px-10 py-4 tracking-widest uppercase',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
