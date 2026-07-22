import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      default:
        'bg-[#C5A26F] text-[#1A1612] hover:bg-[#B38A5A] focus:ring-[#C5A26F]',
      outline:
        'border border-[#C5A26F] text-[#C5A26F] hover:bg-[#C5A26F] hover:text-[#1A1612] focus:ring-[#C5A26F]',
      ghost: 'text-[#1A1612] hover:bg-[#F5F2ED]',
    };

    const sizes = {
      default: 'px-8 py-3 text-sm tracking-[2px]',
      sm: 'px-6 py-2 text-xs tracking-[1.5px]',
      lg: 'px-10 py-4 text-base tracking-[2px]',
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