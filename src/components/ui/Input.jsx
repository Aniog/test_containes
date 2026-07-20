import { cn } from '@/lib/utils';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full bg-transparent border border-border px-4 py-3 text-sm font-inter text-charcoal placeholder:text-taupe-light focus:outline-none focus:border-gold transition-colors duration-200',
        className
      )}
      {...props}
    />
  );
}
