import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

const buttonVariants = {
  default: 'bg-accent text-accent-foreground hover:bg-accent-dark',
  outline: 'border border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground',
  ghost: 'text-foreground hover:text-accent bg-transparent',
};

const buttonSizes = {
  default: 'h-12 px-8 py-3 text-sm tracking-wider uppercase',
  sm: 'h-9 px-4 text-xs tracking-wider uppercase',
  lg: 'h-14 px-10 text-base tracking-wider uppercase',
  icon: 'h-10 w-10',
};

const Button = React.forwardRef(({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 font-medium',
        buttonVariants[variant] || buttonVariants.default,
        buttonSizes[size] || buttonSizes.default,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };