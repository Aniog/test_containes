import React, { useEffect } from 'react'
import { Check } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartToast() {
  const { toast, dismissToast, openCart, isCartOpen } = useCart()

  useEffect(() => {
    if (!toast) return undefined
    const t = setTimeout(dismissToast, 3200)
    return () => clearTimeout(t)
  }, [toast, dismissToast])

  if (!toast || isCartOpen) return null

  return (
    <div
      key={toast.id}
      className="fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 animate-fade-up items-center gap-3 border border-line bg-coal px-5 py-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
      role="status"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-gold/60 text-gold">
        <Check className="h-4 w-4" />
      </span>
      <p className="flex-1 text-xs leading-relaxed tracking-wide text-ivory">{toast.message}</p>
      <button
        type="button"
        onClick={() => {
          dismissToast()
          openCart()
        }}
        className="shrink-0 text-[11px] font-semibold uppercase tracking-widest2 text-gold transition-colors hover:text-goldlight"
      >
        View Bag
      </button>
    </div>
  )
}
