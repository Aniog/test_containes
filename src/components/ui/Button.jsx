import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
        {
          'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm': variant === 'primary',
          'border border-primary text-primary hover:bg-primary/10': variant === 'outline',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'hover:bg-muted hover:text-foreground': variant === 'ghost',
          'h-10 px-6 py-2': size === 'default',
          'h-8 px-3 text-xs': size === 'sm',
          'h-12 px-8 py-3 text-base': size === 'lg',
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
});
Button.displayName = "Button"

export { Button }