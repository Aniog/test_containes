import { cn } from '@/lib/utils';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-velmora-black text-velmora-white hover:bg-velmora-gold transition-colors tracking-widest uppercase text-xs px-8 py-4',
    outline: 'border border-velmora-black text-velmora-black hover:bg-velmora-black hover:text-velmora-white transition-all tracking-widest uppercase text-xs px-8 py-4',
    accent: 'bg-velmora-gold text-velmora-white hover:bg-velmora-black transition-colors tracking-widest uppercase text-xs px-8 py-4',
    ghost: 'text-velmora-black hover:text-velmora-gold transition-colors tracking-widest uppercase text-xs',
  };

  return (
    <button className={cn('inline-flex items-center justify-center font-medium duration-300', variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;