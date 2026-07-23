import { cn } from '@/lib/utils';

export default function IconButton({
  children,
  onClick,
  className,
  badge,
  ariaLabel,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'relative p-2 rounded-full transition-colors duration-300 hover:bg-black/5',
        className
      )}
    >
      {children}
      {badge ? (
        <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-white">
          {badge}
        </span>
      ) : null}
    </button>
  );
}