import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQty, subtotal, count } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items.length])

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
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[110]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div
        className="animate-overlay-in absolute inset-0 bg-espresso/40 backdrop-blur-[2px]"
        onClick={closeCart}
      />
      <aside
        ref={containerRef}
        className="animate-drawer-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl text-ink">
            Your Bag <span className="text-taupe">({count})</span>
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={36} strokeWidth={1} className="text-sand" />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="text-sm text-taupe">Discover pieces crafted to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 inline-flex items-center justify-center bg-gold px-8 py-4 text-xs uppercase tracking-widest3 text-ivory transition-colors hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-sand">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="relative h-24 w-20 shrink-0 overflow-hidden bg-cream"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={`[cart-${item.key}-name] gold jewelry`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                    <span id={`cart-${item.key}-name`} className="sr-only">
                      {item.name}
                    </span>
                  </Link>

                  {/* Details */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-widest3 text-ink hover:text-gold"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-taupe hover:text-gold"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-widest3 text-taupe">{item.tone}</p>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => setQty(item.key, item.qty - 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(item.key, item.qty + 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm text-ink">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest2 text-taupe">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 text-xs uppercase tracking-widest3 text-ivory transition-colors hover:bg-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 text-xs uppercase tracking-widest3 text-taupe hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
