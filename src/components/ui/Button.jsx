import { cn } from '@/lib/utils';

export function Button({ className, variant = 'primary', size = 'default', children, ...props }) {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-opacity-90',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'hover:bg-secondary',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizes = {
    default: 'px-8 py-3 text-sm',
    sm: 'px-4 py-2 text-xs',
    lg: 'px-10 py-4 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center tracking-widest uppercase transition-all duration-300 font-medium',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
