import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  disabled = false,
  loading = false,
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] active:scale-[0.98]',
    secondary: 'bg-transparent border border-[var(--color-accent)] text-[var(--color-dark)] hover:bg-[var(--color-accent)] hover:text-white active:scale-[0.98]',
    ghost: 'bg-transparent text-[var(--color-accent)] hover:underline underline-offset-4',
    dark: 'bg-[var(--color-dark)] text-white hover:bg-[var(--color-secondary)] active:scale-[0.98]'
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 tracking-wider uppercase',
    md: 'text-sm px-6 py-3 tracking-wide',
    lg: 'text-base px-8 py-4 tracking-wide',
    xl: 'text-lg px-10 py-5 tracking-wider'
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
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
          <span>Loading...</span>
        </span>
      ) : children}
    </button>
  );
};

export default Button;
