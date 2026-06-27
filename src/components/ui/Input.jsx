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
        <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 text-sm',
          'bg-white border border-[var(--color-border)] rounded-[var(--radius-md)]',
          'transition-all duration-200',
          'placeholder:text-[var(--color-secondary)]',
          'focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]',
          error && 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
}
