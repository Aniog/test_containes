import { cn } from '@/lib/utils'

const buttonVariants = {
  primary: 'bg-gold-500 text-white hover:bg-gold-600 active:bg-gold-700',
  secondary: 'bg-charcoal-700 text-white hover:bg-charcoal-600 active:bg-charcoal-500',
  outline: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white',
  ghost: 'text-charcoal-700 hover:bg-cream-200',
  link: 'text-gold-500 underline-offset-4 hover:underline',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  full: 'w-full px-6 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
