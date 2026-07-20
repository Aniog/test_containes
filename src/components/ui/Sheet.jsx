import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sheet({ open, onClose, children, side = 'right', className }) {
  if (!open) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-40 transition-opacity duration-300 opacity-100"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        className={cn(
          'fixed top-0 h-full bg-surface shadow-lift z-50 transition-transform duration-300 ease-out flex flex-col',
          side === 'right' ? 'right-0 translate-x-0' : 'left-0 -translate-x-full',
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </>
  );
}

export function SheetHeader({ children, className, onClose }) {
  return (
    <div className={cn('flex items-center justify-between px-6 py-5 border-b border-hairline', className)}>
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 text-muted hover:text-foreground transition-colors"
          aria-label="Close panel"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export function SheetTitle({ children, className }) {
  return (
    <h2 className={cn('font-serif text-xl tracking-wide text-foreground', className)}>
      {children}
    </h2>
  );
}

export const SheetBody = React.forwardRef(function SheetBody(
  { children, className },
  ref
) {
  return (
    <div ref={ref} className={cn('flex-1 overflow-y-auto p-6', className)}>
      {children}
    </div>
  );
});

export function SheetFooter({ children, className }) {
  return <div className={cn('p-6 border-t border-hairline', className)}>{children}</div>;
}
