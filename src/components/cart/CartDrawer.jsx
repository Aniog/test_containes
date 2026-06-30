import { ShoppingBag, X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/utils.js'
import QuantitySelector from '../ui/QuantitySelector.jsx'

export default function CartDrawer() {
  const { closeCart, isOpen, items, removeItem, subtotal, updateQuantity } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className={`fixed inset-0 z-[60] transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <button type="button" aria-label="Close cart overlay" className={`absolute inset-0 bg-stone-950/70 backdrop-blur-sm transition ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeCart} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-stone-950 shadow-2xl shadow-black/40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-amber-200" />
            <h2 className="text-sm uppercase tracking-[0.24em] text-stone-100">Your Cart</h2>
          </div>
          <button type="button" aria-label="Close cart" className="rounded-full border border-white/10 p-2 text-stone-300 hover:text-stone-100" onClick={closeCart}>
            <X className="h-4 w-4" />
          </button>
        </div>
        {items.length ? (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <div key={item.lineId} className="rounded-[1.75rem] border border-white/10 bg-stone-900/70 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <Link to={`/products/${item.slug}`} className="font-display text-xl leading-none tracking-[0.16em] text-stone-100" onClick={closeCart}>
                        {item.name}
                      </Link>
                      <p className="text-sm text-stone-400">{item.shortDescription}</p>
                      <p className="text-xs uppercase tracking-[0.22em] text-amber-200">{item.variant}</p>
                    </div>
                    <button type="button" className="text-xs uppercase tracking-[0.22em] text-stone-400 hover:text-stone-100" onClick={() => removeItem(item.lineId)}>
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <QuantitySelector value={item.quantity} onChange={(quantity) => updateQuantity(item.lineId, quantity)} />
                    <p className="text-sm font-medium text-stone-100">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 px-6 py-6">
              <div className="mb-5 flex items-center justify-between text-sm uppercase tracking-[0.2em] text-stone-300">
                <span>Subtotal</span>
                <span className="text-stone-100">{formatPrice(subtotal)}</span>
              </div>
              <button type="button" className="w-full rounded-full bg-amber-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 shadow-lg shadow-amber-200/20 transition hover:bg-amber-100">
                Checkout Coming Soon
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-4xl text-stone-100">Your cart is still waiting.</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-stone-400">Add a few luminous pieces to your bag and return when you are ready.</p>
            <Link to="/shop" className="mt-8 rounded-full border border-amber-200/40 px-6 py-3 text-sm uppercase tracking-[0.24em] text-amber-200 transition hover:bg-amber-200 hover:text-stone-950" onClick={closeCart}>
              Continue Shopping
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}
