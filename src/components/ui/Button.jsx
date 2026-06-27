import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}, ref) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-sans font-medium
    transition-all duration-250ms
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[var(--color-charcoal)] text-[var(--color-warm-white)]
      hover:bg-[var(--color-accent)]
    `,
    secondary: `
      bg-transparent text-[var(--color-charcoal)]
      border border-[var(--color-charcoal)]
      hover:bg-[var(--color-charcoal)] hover:text-[var(--color-warm-white)]
    `,
    accent: `
      bg-[var(--color-gold)] text-[var(--color-charcoal)]
      hover:bg-[var(--color-gold-dark)]
    `,
    ghost: `
      bg-transparent text-[var(--color-text-secondary)]
      hover:text-[var(--color-charcoal)] hover:bg-[var(--color-bg-secondary)]
    `,
    outline: `
      bg-transparent text-[var(--color-charcoal)]
      border border-[var(--color-border)]
      hover:border-[var(--color-charcoal)]
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    full: 'w-full px-6 py-4 text-sm',
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;