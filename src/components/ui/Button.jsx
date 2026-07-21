import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className,
  isLoading = false,
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-gold text-charcoal hover:bg-gold-hover disabled:bg-gold/50',
    secondary: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-charcoal',
    ghost: 'bg-transparent text-stone hover:text-warmblack',
    dark: 'bg-charcoal text-ivory hover:bg-warmblack',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    default: 'px-8 py-3',
    lg: 'px-10 py-4 text-sm',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        (disabled || isLoading) && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
