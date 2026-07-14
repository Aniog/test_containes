import React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = {
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    primary: 'bg-[#b8860b] text-white hover:bg-[#9a7209] shadow-sm hover:shadow-md',
    secondary: 'border border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white',
    ghost: 'text-[#5c5c5c] hover:text-[#1a1a1a] hover:bg-[#f5f5f0]',
    outline: 'border border-[#e5e5e5] text-[#1a1a1a] hover:border-[#b8860b] hover:text-[#b8860b]',
  },
  sizes: {
    sm: 'h-9 px-4 py-2',
    md: 'h-11 px-6 py-2.5',
    lg: 'h-12 px-8 py-3 text-base',
  }
};

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  return (
    <button
      className={cn(
        buttonVariants.base,
        buttonVariants.variants[variant],
        buttonVariants.sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
