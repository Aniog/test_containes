import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-[#F7931E] text-white hover:bg-[#E0850D] hover:-translate-y-0.5 hover:shadow-lg",
    secondary: "border-2 border-[#1E3A5F] text-[#1E3A5F] bg-transparent hover:bg-[#1E3A5F] hover:text-white",
    outline: "border border-[#E2E8F0] bg-white text-[#1E293B] hover:bg-[#F8FAFC]",
    ghost: "text-[#1E3A5F] hover:bg-[#F1F5F9]",
    link: "text-[#1E3A5F] underline-offset-4 hover:underline",
  };
  
  const sizes = {
    default: "h-10 px-5 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-md px-8 text-base",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };