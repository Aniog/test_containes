import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover border border-accent hover:border-accent-hover',
  secondary: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',
  outline: 'bg-transparent text-accent border border-accent hover:bg-accent hover:text-white',
  ghost: 'bg-transparent text-primary hover:bg-bg-warm',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
  full: 'px-6 py-3 text-sm w-full',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  loading,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-300',
        'tracking-wider uppercase',
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
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Adding...</span>
        </span>
      ) : children}
    </button>
  );
}
