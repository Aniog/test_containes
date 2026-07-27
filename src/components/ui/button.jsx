import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md';
  
  const variants = {
    primary: 'bg-[#0A2540] text-white hover:bg-[#1a3a5c] focus-visible:ring-[#0A2540]',
    secondary: 'bg-white text-[#0A2540] border border-[#0A2540] hover:bg-[#f8fafc] focus-visible:ring-[#0A2540]',
    accent: 'bg-[#C5A46E] text-white hover:bg-[#b08d55] focus-visible:ring-[#C5A46E]',
    ghost: 'text-[#0A2540] hover:bg-[#f1f5f9]',
  };
  
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-12 px-8 text-lg',
  };

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
    const child = children;
    return React.cloneElement(child, {
      ...props,
      ...child.props,
      className: cn(buttonClasses, child.props.className),
      ref: ref,
    });
  }
  
  return (
    <button
      ref={ref}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
