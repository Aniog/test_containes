import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { useStrkImages } from '@/hooks/useStrkImages'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()
  const containerRef = useStrkImages([isOpen, items.length])

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

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Bag{' '}
            <span className="text-sm text-stone">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-sand" strokeWidth={1} />
            <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
            <p className="mt-2 text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 inline-flex items-center justify-center border border-ink px-8 py-3 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-sand/70">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-cream"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-[0.12em] text-ink hover:text-gold"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-stone transition-colors hover:text-ink"
                      >
                        <X className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone">
                      {item.tone}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-ink transition-colors hover:bg-cream"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-ink transition-colors hover:bg-cream"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
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
              <span className="text-[11px] uppercase tracking-[0.25em] text-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-5 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full py-3 text-[11px] uppercase tracking-[0.25em] text-ink-soft transition-colors hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
