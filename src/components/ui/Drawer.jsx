import { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Drawer({ isOpen, onClose, title, children, side = 'right' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          'absolute top-0 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-500 ease-out-expo flex flex-col',
          side === 'right'
            ? 'right-0 translate-x-full'
            : 'left-0 -translate-x-full',
          isOpen && 'translate-x-0'
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-2xl text-ink">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-taupe hover:text-ink transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
