import { cn } from '@/lib/utils';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full bg-white border border-velmora-border px-4 py-3 text-sm text-velmora-ink placeholder:text-velmora-stone focus:outline-none focus:border-velmora-accent focus:ring-1 focus:ring-velmora-accent transition-all',
        className
      )}
      {...props}
    />
  );
}
