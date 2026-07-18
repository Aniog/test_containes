import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sheet({ open, onClose, title, children, side = 'right' }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'absolute top-0 h-full w-full max-w-md bg-paper shadow-xl transition-transform duration-300 ease-out',
          side === 'right' ? 'right-0 translate-x-0' : 'left-0 translate-x-0',
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
            <span className="font-serif text-xl">{title}</span>
            <button
              onClick={onClose}
              className="p-2 text-ink transition-colors hover:text-gold"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
