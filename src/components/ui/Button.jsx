import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Button = React.forwardRef(({ className, variant = 'solid', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? Link : "button"
  
  const variants = {
    solid: "bg-accent text-accent-foreground hover:bg-stone-900 hover:text-stone-50 transition-colors duration-300",
    outline: "border border-stone-900 bg-transparent text-foreground hover:bg-stone-50 transition-colors duration-300",
    ghost: "bg-transparent text-foreground hover:text-accent transition-colors duration-300",
    link: "underline-offset-4 hover:underline text-foreground",
  };
  
  const sizes = {
    default: "h-11 px-6 py-2 uppercase tracking-widest text-xs font-medium",
    sm: "h-9 px-4 text-xs tracking-wider",
    lg: "h-14 px-8 uppercase tracking-widest text-sm font-medium",
    icon: "h-11 w-11 flex items-center justify-center",
  };

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
