import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '../../contexts/CartContext.jsx'
import { formatCurrency } from '../../lib/format.js'
import QuantitySelector from './QuantitySelector.jsx'

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, subtotal, clearCart } = useCart()

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-stone-950/40 transition duration-300 ${isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeCart}
      />

      <aside
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[var(--velmora-cream)] text-[var(--velmora-ink)] shadow-2xl transition duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Velmora Cart</p>
            <h2 className="mt-1 text-3xl text-[var(--velmora-ink)]">Your selections</h2>
          </div>
          <button type="button" className="rounded-full p-2 text-stone-500 transition hover:bg-white hover:text-[var(--velmora-ink)]" onClick={closeCart}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <div className="rounded-full bg-white p-4 shadow-lg shadow-stone-900/5">
              <ShoppingBag className="h-8 w-8 text-[var(--velmora-gold)]" />
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl text-[var(--velmora-ink)]">Your cart is empty</h3>
              <p className="text-sm leading-6 text-stone-600">
                Discover sculptural earrings, polished necklaces, and gift-ready sets designed to be treasured.
              </p>
            </div>
            <Link
              to="/shop"
              className="rounded-full bg-[var(--velmora-ink)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-stone-800"
              onClick={closeCart}
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <div key={item.lineId} className="rounded-[1.5rem] border border-stone-200/80 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.22em] text-stone-500">{item.tone}</p>
                      <h3 className="text-lg uppercase tracking-[0.22em] text-[var(--velmora-ink)]">{item.name}</h3>
                      <p className="text-sm text-stone-600">{formatCurrency(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${item.name}`}
                      className="rounded-full p-2 text-stone-400 transition hover:bg-stone-100 hover:text-[var(--velmora-ink)]"
                      onClick={() => removeItem(item.lineId)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <QuantitySelector compact value={item.quantity} onChange={(quantity) => updateQuantity(item.lineId, quantity)} />
                    <p className="text-sm font-medium text-[var(--velmora-ink)]">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 bg-[var(--velmora-rose)]/50 px-6 py-5">
              <div className="flex items-center justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="text-lg font-medium text-[var(--velmora-ink)]">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                Shipping and duties calculated at checkout
              </p>
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  className="flex-1 rounded-full border border-stone-300 px-4 py-3 text-xs uppercase tracking-[0.22em] text-[var(--velmora-ink)] transition hover:bg-white"
                  onClick={clearCart}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-full bg-[var(--velmora-ink)] px-4 py-3 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-stone-800"
                >
                  Checkout Soon
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
