import { cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/utils';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  asChild = false,
  ...props
}) {
  const base = 'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-gold text-ink hover:bg-gold-light',
    outline: 'border border-ink text-ink bg-transparent hover:bg-ink hover:text-cream',
    ghost: 'text-ink hover:text-gold-dark bg-transparent',
    cream: 'bg-cream-dark text-ink hover:bg-sand',
  };
  const sizes = {
    sm: 'px-5 py-2 text-xs uppercase tracking-brand',
    md: 'px-8 py-3 text-sm uppercase tracking-brand',
    lg: 'px-10 py-4 text-sm uppercase tracking-brand',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
