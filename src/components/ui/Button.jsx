import { cn } from '@/lib/utils';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className, 
  disabled,
  loading,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-ultra-wide text-xs uppercase transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gold-500 text-white hover:bg-gold-600',
    secondary: 'bg-transparent border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white',
    ghost: 'bg-transparent text-charcoal-700 hover:text-gold-600',
    outline: 'bg-transparent border border-charcoal-300 text-charcoal-700 hover:border-charcoal-500',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-[10px]',
    default: 'px-8 py-4',
    large: 'px-10 py-5 text-sm',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading...</span>
        </span>
      ) : children}
    </button>
  );
}
