import { cn } from '@/lib/utils';

export default function Input({
  label,
  error,
  className,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-medium uppercase tracking-ui text-charcoal mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 text-sm bg-warm-white border border-light-gray rounded-sm',
          'transition-all duration-200',
          'placeholder:text-warm-gray',
          'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
