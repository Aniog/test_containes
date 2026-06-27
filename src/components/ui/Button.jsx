import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const variants = {
  primary: `
    bg-[var(--color-charcoal)] text-[var(--color-cream)] 
    hover:bg-[var(--color-rich-black)] 
    disabled:bg-[var(--color-taupe)]
  `,
  secondary: `
    bg-transparent text-[var(--color-charcoal)] 
    border border-[var(--color-charcoal)]
    hover:bg-[var(--color-charcoal)] hover:text-[var(--color-cream)]
  `,
  gold: `
    bg-[var(--color-gold)] text-[var(--color-rich-black)] 
    hover:bg-[var(--color-gold-dark)]
    disabled:bg-[var(--color-taupe)]
  `,
  ghost: `
    bg-transparent text-[var(--color-charcoal)] 
    hover:bg-[var(--color-ivory)]
  `,
  outline: `
    bg-transparent text-[var(--color-gold)] 
    border border-[var(--color-gold)]
    hover:bg-[var(--color-gold)] hover:text-[var(--color-rich-black)]
  `
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-lg'
};

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  loading,
  fullWidth,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'font-medium tracking-wide',
        'transition-all duration-200',
        'uppercase text-caps',
        'rounded-sm',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        loading && 'opacity-70 cursor-wait',
        className
      )}
      {...props}
    >
      {loading ? (
        <>
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
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" 
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
