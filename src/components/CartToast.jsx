import { Check } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartToast() {
  const { toast, openCart } = useCart()
  if (!toast) return null

  return (
    <div className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 animate-fade-up">
      <button
        type="button"
        onClick={openCart}
        className="flex items-center gap-3 bg-espresso px-5 py-3.5 text-cream shadow-soft-lg"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold">
          <Check className="h-3.5 w-3.5 text-cream" strokeWidth={2.5} />
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em]">{toast}</span>
      </button>
    </div>
  )
}
