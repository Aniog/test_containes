import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items.length])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-card transition-transform duration-400 ease-luxe',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl text-ink">
            Your Cart {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-gold transition-colors"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <div ref={containerRef} className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-hairline" />
              <p className="mt-4 font-serif text-xl text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm text-stone">Discover pieces crafted to be treasured.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center uppercase tracking-widest3 text-xs font-medium bg-gold text-cream hover:bg-gold-deep px-8 py-4 transition-colors"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-sand"
                  >
                    <img
                      src={PLACEHOLDER}
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      className="h-full w-full object-cover"
                    />
                    <span id={item.titleId} className="sr-only">{item.name}</span>
                    <span id={item.descId} className="sr-only">{item.shortDesc}</span>
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-base uppercase tracking-widest3 text-ink">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs uppercase tracking-widest3 text-stone">
                          {item.tone === 'silver' ? 'Silver Tone' : 'Gold Tone'}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-ink hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-ink hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-xs uppercase tracking-widest3 text-stone hover:text-ink transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest3 text-stone">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="mt-4 w-full bg-gold text-cream hover:bg-gold-deep uppercase tracking-widest3 text-xs font-medium py-4 transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-xs uppercase tracking-widest3 text-stone hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
