import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'default',
  isLoading = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[var(--color-gold)] text-[var(--color-bg-primary)] hover:bg-[var(--color-gold-dark)]',
    secondary: 'bg-transparent text-[var(--color-gold)] border border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg-primary)]',
    ghost: 'bg-transparent text-[var(--color-text-primary)] hover:text-[var(--color-gold)]',
    dark: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    default: 'px-8 py-3.5 text-[0.8125rem]',
    lg: 'px-10 py-4 text-sm',
    icon: 'p-3'
  };
  
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
