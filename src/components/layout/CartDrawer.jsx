import { X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/utils.js'

export default function CartDrawer() {
  const location = useLocation()
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeItem, subtotal } = useCart()

  useEffect(() => {
    setIsCartOpen(false)
  }, [location.pathname, location.hash, setIsCartOpen])

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-black/50 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[var(--color-card)] text-[var(--color-text-light)] shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-line-light)] px-6 py-5">
          <div>
            <p className="font-serif text-2xl">Your Cart</p>
            <p className="text-sm text-[var(--color-muted-light)]">Curated for gifting and everyday wear.</p>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="text-[var(--color-text-light)] transition hover:text-[var(--color-accent-deep)]"
            onClick={() => setIsCartOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cartItems.length === 0 ? (
            <div className="rounded-3xl border border-[var(--color-line-light)] bg-[var(--color-surface-light)] p-6 text-center">
              <p className="font-serif text-2xl text-[var(--color-text-light)]">Still deciding?</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted-light)]">
                Discover quietly luxurious pieces designed for layering, gifting, and everyday shine.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 inline-flex rounded-full border border-[var(--color-line-light)] px-5 py-3 text-xs uppercase tracking-[0.28em] text-[var(--color-text-light)] transition hover:border-[var(--color-accent-deep)] hover:text-[var(--color-accent-deep)]"
              >
                Shop Jewelry
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="rounded-3xl border border-[var(--color-line-light)] bg-[var(--color-surface-light)] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-xl uppercase tracking-[0.22em] text-[var(--color-text-light)]">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-muted-light)]">{item.subtitle}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--color-muted-light)]">
                        {item.variant}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted-light)] transition hover:text-[var(--color-accent-deep)]"
                      onClick={() => removeItem(item.id, item.variant)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-[var(--color-line-light)] text-[var(--color-text-light)]">
                      <button
                        type="button"
                        className="px-4 py-2"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        className="px-4 py-2"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-[var(--color-text-light)]">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[var(--color-line-light)] px-6 py-5">
          <div className="flex items-center justify-between text-sm text-[var(--color-muted-light)]">
            <span>Subtotal</span>
            <span className="font-serif text-2xl text-[var(--color-text-light)]">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-full bg-[var(--color-accent-deep)] px-5 py-4 text-xs uppercase tracking-[0.28em] text-[var(--color-bg)] transition hover:opacity-90"
          >
            Checkout Soon
          </button>
        </div>
      </aside>
    </>
  )
}
