import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[#0A1628] text-white hover:bg-[#C5A46E] focus:ring-[#0A1628]',
    secondary: 'bg-transparent border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white focus:ring-[#0A1628]',
    outline: 'border border-[#E8E6E1] text-[#2C3E50] hover:bg-[#F8F6F1] focus:ring-[#C5A46E]',
  };
  
  const sizes = {
    default: 'px-8 py-3.5 text-sm',
    sm: 'px-6 py-2.5 text-sm',
    lg: 'px-10 py-4 text-base',
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