import { cn } from '@/lib/utils';

export function Button({
  children,
  variant = 'solid',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 text-sm font-sans font-medium uppercase tracking-widest transition-all duration-300 ease-out-editorial focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-velmora-accent disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'solid' &&
          'bg-velmora-accent text-white hover:bg-velmora-accent-hover shadow-sm hover:shadow',
        variant === 'outline' &&
          'border border-velmora-accent text-velmora-accent bg-transparent hover:bg-velmora-accent hover:text-white',
        variant === 'ghost' &&
          'text-velmora-text hover:text-velmora-accent bg-transparent',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
