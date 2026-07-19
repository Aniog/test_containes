import { cn } from '@/lib/utils';

export function Button({ className, variant = 'primary', size = 'default', children, ...props }) {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-[#B8944F] hover:shadow-lg',
    secondary: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    dark: 'bg-foreground text-background hover:bg-[#2D2824]',
    ghost: 'hover:bg-muted',
    outline: 'border border-border hover:bg-muted',
  };

  const sizes = {
    default: 'px-8 py-3 text-sm',
    sm: 'px-4 py-2 text-xs',
    lg: 'px-12 py-4 text-base',
    icon: 'p-2',
  };

  return (
    <button
      className={cn(
        'tracking-widest uppercase transition-all duration-300 font-medium',
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
