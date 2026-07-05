import React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = {
  primary: 'bg-[#C9A96E] text-white hover:bg-[#B8944F] border border-[#C9A96E]',
  secondary: 'bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white',
  outline: 'bg-transparent text-[#C9A96E] border border-[#C9A96E] hover:bg-[#C9A96E] hover:text-white',
  ghost: 'bg-transparent text-[#1A1A1A] hover:bg-[#F5F0EB]',
  link: 'bg-transparent text-[#C9A96E] underline underline-offset-4 hover:text-[#B8944F]',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-xs tracking-widest uppercase',
  md: 'px-6 py-3 text-sm tracking-widest uppercase',
  lg: 'px-8 py-4 text-sm tracking-widest uppercase',
};

const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-300 ease-out',
          'disabled:opacity-50 disabled:cursor-not-allowed',
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
);

Button.displayName = 'Button';

export { Button, buttonVariants, buttonSizes };
