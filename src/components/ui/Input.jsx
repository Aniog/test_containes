import { cn } from '@/lib/utils';

export default function Input({
  label,
  error,
  className,
  type = 'text',
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-cocoa mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          'w-full px-4 py-3 bg-white border border-silk rounded-none',
          'text-espresso placeholder:text-cocoa/50',
          'transition-colors duration-200',
          'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
