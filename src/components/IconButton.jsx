import { cn } from '@/lib/utils';

export function IconButton({ children, className, badge, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'relative inline-flex items-center justify-center p-2 rounded-full transition-colors duration-300 hover:bg-black/5 focus-visible:outline-none',
        className
      )}
      {...props}
    >
      {children}
      {typeof badge === 'number' && badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-velmora-gold text-[10px] font-medium text-white px-1">
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </button>
  );
}
