import { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sheet({ open, onClose, children, side = 'right', className }) {
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-velmora-base/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          'absolute top-0 h-full w-full max-w-md bg-velmora-cream shadow-soft-lg transition-transform duration-300 ease-luxury',
          side === 'right' ? 'right-0' : 'left-0',
          open ? 'translate-x-0' : side === 'right' ? 'translate-x-full' : '-translate-x-full',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function SheetHeader({ children, onClose }) {
  return (
    <div className="flex items-center justify-between border-b border-velmora-base/10 px-6 py-4">
      {children}
      <button
        type="button"
        onClick={onClose}
        className="rounded-full p-1.5 text-velmora-taupe transition-colors hover:bg-velmora-cream-dark hover:text-velmora-base"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

export function SheetBody({ children, className }) {
  return <div className={cn('px-6', className)}>{children}</div>;
}
