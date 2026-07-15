import { cn } from '@/lib/utils';

export function Button({
  children,
  variant = 'solid',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center uppercase tracking-widest text-xs font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-velmora-accent disabled:opacity-50 disabled:cursor-not-allowed';
  const styles = {
    solid:
      'bg-velmora-accent text-white px-8 py-3 hover:bg-velmora-accent-dark',
    outline:
      'border border-velmora-ink text-velmora-ink px-8 py-3 hover:bg-velmora-ink hover:text-white',
    ghost:
      'text-velmora-ink px-4 py-2 hover:text-velmora-accent',
    white:
      'bg-white text-velmora-ink px-8 py-3 hover:bg-velmora-cream',
  };

  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
