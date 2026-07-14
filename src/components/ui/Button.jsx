import React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = {
  primary:
    'bg-gold text-charcoal hover:bg-gold-dark font-sans font-medium text-sm tracking-wide transition-all duration-300 ease-out',
  secondary:
    'border border-gold text-gold hover:bg-gold hover:text-charcoal font-sans font-medium text-sm tracking-wide transition-all duration-300 ease-out',
  ghost:
    'text-ink hover:text-gold font-sans text-sm tracking-wide transition-colors duration-300',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
  full: 'w-full py-4 text-sm',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center uppercase tracking-widest-xl',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
