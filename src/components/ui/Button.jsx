import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-gold text-charcoal hover:bg-gold-light active:bg-gold-dark',
  secondary: 'bg-transparent border border-gold text-gold hover:bg-gold/10',
  ghost: 'bg-transparent text-gold hover:text-gold-light',
};

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  loading,
  fullWidth,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium',
        'rounded-none transition-all duration-300 ease-silk',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'active:scale-[0.98]',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
}
