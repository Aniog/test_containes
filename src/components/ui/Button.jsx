import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
  accent: 'bg-amber-200 text-stone-900 hover:bg-amber-300',
  outline:
    'border border-stone-300 bg-transparent text-stone-900 hover:border-stone-900 hover:bg-stone-900 hover:text-stone-50',
  ghost: 'bg-transparent text-stone-900 hover:bg-stone-100',
}

const sizes = {
  sm: 'h-10 px-4 text-xs tracking-[0.24em]',
  md: 'h-11 px-5 text-xs tracking-[0.28em]',
  lg: 'h-12 px-6 text-xs tracking-[0.3em]',
}

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium uppercase transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
)

Button.displayName = 'Button'

export default Button
