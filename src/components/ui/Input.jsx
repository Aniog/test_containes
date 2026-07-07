import { cn } from '@/lib/utils';

const Input = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-medium text-charcoal mb-2 tracking-wide uppercase">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 bg-transparent border border-sand rounded-none font-sans text-sm text-charcoal placeholder:text-warmgray/60 transition-colors duration-200',
          'focus:border-gold focus:outline-none',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
