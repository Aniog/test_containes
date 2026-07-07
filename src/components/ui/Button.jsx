import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-amber-500 text-stone-950 shadow-sm shadow-amber-900/10 hover:bg-amber-400 focus-visible:outline-amber-500',
  secondary:
    'border border-stone-300 bg-white text-stone-900 hover:border-stone-900 hover:bg-stone-100 focus-visible:outline-stone-500',
  ghost:
    'bg-transparent text-stone-900 hover:bg-stone-100 focus-visible:outline-stone-400',
  dark:
    'bg-stone-950 text-stone-50 shadow-sm shadow-stone-950/20 hover:bg-stone-800 focus-visible:outline-stone-500',
}

const sizes = {
  default: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm',
  icon: 'h-11 w-11 px-0',
}

export const Button = forwardRef(function Button(
  { className, variant = 'primary', size = 'default', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-sans-custom text-sm font-medium uppercase tracking-[0.24em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
})
