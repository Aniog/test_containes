import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { getStrkImageUrl } from '@/lib/strkImageUrl'

const PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

export default function CartDrawer() {
  const { items, isOpen, closeCart, setQty, removeItem, subtotal } = useCart()
  const panelRef = useRef(null)

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  // ESC closes
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  const freeShippingThreshold = 80
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100)
  const remaining = Math.max(0, freeShippingThreshold - subtotal)

  return (
    <div
      className={cn(
        'fixed inset-0 z-[70] transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-espresso/40"
        onClick={closeCart}
        aria-label="Close cart"
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          'absolute top-0 right-0 h-full w-full max-w-md bg-bone shadow-2xl flex flex-col',
          'transition-transform duration-500 ease-out-soft',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-line">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
            <h2 className="font-serif text-xl">Your Bag</h2>
            <span className="text-xs text-muted">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-ink"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Free shipping progress */}
        <div className="px-6 py-4 border-b border-line bg-cream-2/40">
          {remaining > 0 ? (
            <p className="text-xs text-ink/80">
              Add <span className="font-medium text-espresso">{formatPrice(remaining)}</span> more for free worldwide shipping.
            </p>
          ) : (
            <p className="text-xs text-ink/80">
              You've unlocked <span className="font-medium text-gold-2">free worldwide shipping</span>.
            </p>
          )}
          <div className="mt-2 h-px bg-line relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gold transition-all duration-500 ease-out-soft"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <span className="font-serif text-2xl text-ink">Your bag is empty</span>
              <p className="mt-3 text-sm text-muted max-w-xs">
                Pieces you'll reach for, made to last. Begin with our bestsellers.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-7 btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((item) => {
                const img = item.product.images[0]
                return (
                  <li key={item.key} className="flex gap-4 p-6">
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={closeCart}
                      className="block w-20 h-24 bg-cream-2 overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={getStrkImageUrl(`${item.product.id}-primary`) || PLACEHOLDER}
                        alt={item.product.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to={`/product/${item.product.id}`}
                            onClick={closeCart}
                            className="product-name block leading-tight"
                          >
                            {item.product.name}
                          </Link>
                          <p className="mt-1 text-[11px] text-muted">
                            {item.variant === 'silver' ? 'Sterling Silver' : '18K Gold Plated'}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          aria-label={`Remove ${item.product.name}`}
                          className="text-muted hover:text-espresso p-1 -m-1"
                        >
                          <X className="w-4 h-4" strokeWidth={1.4} />
                        </button>
                      </div>
                      <div className="mt-auto pt-3 flex items-end justify-between">
                        <div className="inline-flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() => setQty(item.key, item.qty - 1)}
                            className="w-8 h-8 flex items-center justify-center text-ink hover:text-espresso"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={1.4} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(item.key, item.qty + 1)}
                            className="w-8 h-8 flex items-center justify-center text-ink hover:text-espresso"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={1.4} />
                          </button>
                        </div>
                        <span className="text-sm text-espresso font-medium">
                          {formatPrice(item.lineTotal)}
                        </span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5 bg-bone">
            <div className="flex items-center justify-between mb-4">
              <span className="eyebrow">Subtotal</span>
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-[11px] text-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="btn-primary w-full"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-3 text-[11px] uppercase tracking-widest-2 text-muted hover:text-espresso transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
