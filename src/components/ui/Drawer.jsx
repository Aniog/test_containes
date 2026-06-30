import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Drawer({ isOpen, onClose, title, children, side = 'right' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="flex-1 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative h-full w-full max-w-md bg-velmora-base-light shadow-2xl transition-transform duration-400 ${
          side === 'right' ? 'translate-x-0' : '-translate-x-0'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-velmora-taupe/30 px-6 py-4">
          <h2 className="font-serif text-2xl tracking-wide">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-velmora-taupe-light transition-colors hover:text-velmora-ivory"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>
        <div className="h-[calc(100%-73px)] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
