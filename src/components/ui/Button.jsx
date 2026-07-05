import { clsx } from 'clsx';

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  isLoading,
  disabled,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium text-sm tracking-extra-wide uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-charcoal text-warmWhite hover:bg-gold-700 hover:shadow-lg focus:ring-gold-400',
    outline: 'bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-warmWhite focus:ring-charcoal',
    ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5 focus:ring-charcoal',
    gold: 'bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-400',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
    xl: 'px-10 py-5 text-base',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes.md,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Adding...</span>
        </span>
      ) : children}
    </button>
  );
}
