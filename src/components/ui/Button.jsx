import { cn } from '@/lib/utils';

export function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const base = 'inline-flex items-center justify-center font-inter font-medium tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gold text-ivory hover:bg-gold-light',
    outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory',
    'outline-gold': 'border border-gold text-gold hover:bg-gold hover:text-ivory',
    'outline-ivory': 'border border-ivory text-ivory hover:bg-ivory hover:text-charcoal',
    ghost: 'text-charcoal hover:text-gold',
    dark: 'bg-charcoal text-ivory hover:bg-charcoal-mid',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-xs',
    lg: 'px-10 py-4 text-xs',
    icon: 'p-2',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
