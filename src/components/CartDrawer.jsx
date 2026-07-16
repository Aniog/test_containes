import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, strkImageUrl } from '@/lib/utils'
import Button from '@/components/ui/Button'


export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal, count } = useCart()
  const ref = useRef(null)

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

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart, isOpen])

  if (!isOpen) return null

  const freeShippingThreshold = 75
  const remaining = Math.max(0, freeShippingThreshold - subtotal)
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm fade-in"
        onClick={closeCart}
      />
      {/* Panel */}
      <aside
        ref={ref}
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-card slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-wide2 text-ink">
            Your Bag {count > 0 && <span className="text-stone">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-ink transition-colors hover:text-gold"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="border-b border-sand px-6 py-4">
            <p className="text-[11px] uppercase tracking-wide2 text-stone">
              {remaining > 0 ? (
                <>You're {formatPrice(remaining)} away from free shipping</>
              ) : (
                <>You've unlocked free shipping</>
              )}
            </p>
            <div className="mt-2 h-[2px] w-full bg-sand">
              <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-sand" />
              <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
              <p className="mt-2 text-sm text-stone">Discover pieces crafted to be treasured.</p>
              <Button variant="outline" size="sm" className="mt-6" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-sand">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-5">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={item.name}
                      src={strkImageUrl(item.imgId) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                      className="h-24 w-20 object-cover bg-cream"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-base uppercase tracking-wide2 text-ink">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-[11px] uppercase tracking-wide2 text-stone">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        className="text-stone-light transition-colors hover:text-gold"
                        aria-label="Remove item"
                      >
                        <X size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>
                        <span className="min-w-7 text-center text-xs text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-serif text-base text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wide2 text-stone">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-[11px] text-stone-light">Shipping & taxes calculated at checkout.</p>
            <Button size="md" className="mt-4 w-full">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-wide2 text-stone transition-colors hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
