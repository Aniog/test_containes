import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sheet({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-velmora-ink/40 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col translate-x-0"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-2xl text-velmora-ink">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-velmora-taupe hover:text-velmora-ink transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
