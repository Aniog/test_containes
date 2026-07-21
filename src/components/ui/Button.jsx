import { cn } from '../../lib/utils'

const variants = {
  primary: 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800 border border-charcoal-900',
  secondary: 'bg-transparent text-charcoal-900 border border-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50',
  accent: 'bg-gold-500 text-charcoal-900 hover:bg-gold-600 border border-gold-600',
  ghost: 'bg-transparent text-charcoal-900 hover:bg-warmgray-100',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
  full: 'px-8 py-4 text-sm w-full',
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled,
  loading,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Adding...</span>
        </span>
      ) : children}
    </button>
  )
}
