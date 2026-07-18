import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { PRODUCTS } from '@/data/products'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen || !containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items.length])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-overlay-in"
        onClick={closeCart}
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-card animate-drawer-in flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Bag <span className="text-stone text-sm">({items.length})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-charcoal hover:text-gold transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div ref={containerRef} className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <ShoppingBag size={36} strokeWidth={1} className="text-stone mb-5" />
              <p className="font-serif text-xl text-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-stone mb-6">Discover pieces crafted to be treasured.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.18em] bg-gold text-cream hover:bg-[#9a763f] transition-colors"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => {
                const product = PRODUCTS.find((p) => p.id === item.id)
                return (
                  <li key={item.key} className="flex gap-4">
                    <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                      <img
                        alt={item.name}
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[${item.descId}] [${item.titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src={PLACEHOLDER}
                        className="w-20 h-20 object-cover bg-sand"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="block font-serif text-base uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-stone mt-1">Tone: {item.tone}</p>
                      <p className="text-sm text-gold mt-1">{formatPrice(item.price)}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-hairline">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQuantity(item.key, item.quantity - 1)}
                            className="px-2 py-1 text-charcoal hover:text-gold transition-colors"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="px-3 text-xs text-charcoal min-w-[2ch] text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQuantity(item.key, item.quantity + 1)}
                            className="px-2 py-1 text-charcoal hover:text-gold transition-colors"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          className="text-[11px] uppercase tracking-[0.15em] text-stone hover:text-gold transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    {product && (
                      <span className="sr-only" id={item.titleId}>{item.name}</span>
                    )}
                    {product && (
                      <span className="sr-only" id={item.descId}>{product.short}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-stone">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.18em] bg-gold text-cream hover:bg-[#9a763f] transition-colors"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-center text-[11px] uppercase tracking-[0.18em] text-stone hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
