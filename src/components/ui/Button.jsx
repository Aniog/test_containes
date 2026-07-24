import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className,
  disabled,
  loading,
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    accent: 'btn-accent',
    ghost: 'text-charcoal-600 hover:text-charcoal-900 transition-colors',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    default: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" cy="12" r="10" 
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
          <span>Loading...</span>
        </span>
      ) : children}
    </button>
  );
};

export default Button;
