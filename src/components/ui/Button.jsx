import { Children, cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/utils';

const base =
  'inline-flex items-center justify-center px-8 py-3 text-xs uppercase tracking-extra-wide font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-accent text-accent-foreground hover:bg-accent-hover border border-transparent',
  outline:
    'bg-transparent text-foreground border border-foreground/30 hover:bg-foreground hover:text-background',
  ghost:
    'bg-transparent text-foreground border border-transparent hover:bg-cream',
};

export function Button({
  children,
  variant = 'primary',
  className,
  fullWidth = false,
  disabled = false,
  asChild = false,
  ...props
}) {
  const classes = cn(base, variants[variant], fullWidth && 'w-full', className);

  if (asChild && isValidElement(children)) {
    const child = Children.only(children);
    return cloneElement(child, {
      className: cn(child.props.className, classes),
      ...props,
    });
  }

  return (
    <button disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}
