import { cn } from '@/lib/utils';

export function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const base = 'inline-flex items-center justify-center font-inter font-medium tracking-widest uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light active:bg-velmora-gold-dark',
    outlined: 'border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian',
    'outlined-dark': 'border border-velmora-obsidian text-velmora-obsidian hover:bg-velmora-obsidian hover:text-velmora-linen',
    ghost: 'text-velmora-ash hover:text-velmora-gold',
    'ghost-light': 'text-velmora-linen hover:text-velmora-gold',
    dark: 'bg-velmora-obsidian text-velmora-linen hover:bg-velmora-charcoal',
  };

  const sizes = {
    sm: 'px-5 py-2 text-[10px]',
    md: 'px-8 py-3 text-[11px]',
    lg: 'px-10 py-4 text-xs',
    full: 'w-full px-8 py-4 text-xs',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
