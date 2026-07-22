import { cn } from '@/lib/utils';

export function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const base = 'inline-flex items-center justify-center font-sans font-medium tracking-widest uppercase text-xs transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gold text-white-warm hover:bg-gold-dark border border-gold hover:border-gold-dark',
    outline: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-white-warm',
    dark: 'bg-charcoal text-white-warm border border-charcoal hover:bg-espresso',
    ghost: 'bg-transparent text-charcoal hover:text-gold border border-transparent',
    white: 'bg-white-warm text-charcoal border border-white-warm hover:bg-ivory',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-xs',
    lg: 'px-10 py-4 text-sm',
    full: 'w-full px-8 py-4 text-sm',
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
