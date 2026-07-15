import { cn } from '@/lib/utils';

export function Input({
  label,
  error,
  className,
  type = 'text',
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-medium text-warm-gray mb-2 tracking-wide uppercase">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          'w-full px-4 py-3 border border-hairline bg-white text-charcoal placeholder:text-soft-gray',
          'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold',
          'transition-colors duration-200',
          error && 'border-red-400 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export function Textarea({
  label,
  error,
  className,
  rows = 4,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-medium text-warm-gray mb-2 tracking-wide uppercase">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={cn(
          'w-full px-4 py-3 border border-hairline bg-white text-charcoal placeholder:text-soft-gray',
          'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold',
          'transition-colors duration-200 resize-none',
          error && 'border-red-400 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
