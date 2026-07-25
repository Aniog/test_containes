import { CheckCircle2, X } from 'lucide-react'
import { useCart } from '@/lib/cart'

export default function Toast() {
  const { toast, dismissToast, openCart } = useCart()
  if (!toast) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
      <div className="animate-fade-up pointer-events-auto flex items-center gap-3 border border-ink/10 bg-ink px-5 py-3.5 text-cream shadow-[0_24px_60px_-24px_rgba(28,23,16,0.5)]">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
        <p className="text-xs font-medium tracking-wide">{toast}</p>
        <button
          type="button"
          onClick={() => {
            dismissToast()
            openCart()
          }}
          className="ml-1 text-[11px] font-semibold uppercase tracking-luxe text-gold transition-colors hover:text-cream"
        >
          View Cart
        </button>
        <button
          type="button"
          onClick={dismissToast}
          aria-label="Dismiss notification"
          className="p-1 text-cream/60 transition-colors hover:text-cream"
        >
          <X className="h-3.5 w-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
