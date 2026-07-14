import React from 'react';
import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-velmora-gold text-white hover:bg-velmora-gold-light active:bg-velmora-gold-dark',
  secondary: 'bg-transparent border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-white',
  ghost: 'bg-transparent text-velmora-espresso hover:text-velmora-gold'
};

const sizes = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-sm'
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 ease-silk rounded',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
