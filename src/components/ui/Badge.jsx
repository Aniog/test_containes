import { cn } from '@/lib/utils';

const variants = {
  blue: 'bg-blue-50 text-blue-700',
  red: 'bg-red-50 text-red-700',
  green: 'bg-green-50 text-green-700',
  gray: 'bg-gray-100 text-gray-700',
  navy: 'bg-navy-50 text-navy-900',
};

export default function Badge({ variant = 'blue', className, children }) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
