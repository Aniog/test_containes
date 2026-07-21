import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'solid', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      solid:
        'bg-[#A67C52] text-white hover:bg-[#8B6642] focus:ring-[#A67C52] active:bg-[#6B4F33]',
      outline:
        'border border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white focus:ring-[#A67C52]',
      ghost:
        'text-[#1C1917] hover:bg-[#EDE8E0] focus:ring-[#A67C52]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm tracking-[1px]',
      lg: 'px-8 py-4 text-base tracking-[1.5px]',
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
  }
);

Button.displayName = 'Button';

export default Button;
