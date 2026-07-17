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
        <label className="block text-sm font-medium text-charcoal mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full h-12 px-4 bg-transparent border border-champagne',
          'text-charcoal placeholder:text-mist',
          'transition-all duration-200',
          'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
