import { Link } from 'react-router-dom'
import { ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/storefront'
import { useCart } from '@/hooks/useCart'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, toggleCart, updateQuantity, removeItem } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/50 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => toggleCart(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-lifted transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/60 px-5 py-5">
          <div>
            <p className="velmora-kicker">Your Edit</p>
            <h2 className="font-display text-3xl text-velmora-ink">Cart</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-sand p-3 text-velmora-cocoa transition hover:border-velmora-bronze"
            onClick={() => toggleCart(false)}
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length ? (
          <div className="flex flex-1 flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <div key={item.lineId} className="rounded-[1.5rem] border border-velmora-sand/60 bg-white/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-2xl uppercase tracking-[0.18em] text-velmora-ink">
                        {item.product.name}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-velmora-cocoa/65">{item.tone}</p>
                    </div>
                    <button
                      type="button"
                      className="text-xs uppercase tracking-[0.22em] text-velmora-cocoa/60 transition hover:text-velmora-ink"
                      onClick={() => removeItem(item.lineId)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-cream">
                      <button
                        type="button"
                        className="px-3 py-2 text-sm"
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        className="px-3 py-2 text-sm"
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-medium text-velmora-ink">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t border-velmora-sand/60 px-5 py-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-velmora-cocoa/70">
                <span>Subtotal</span>
                <span className="text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-velmora-bronze px-5 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-velmora-ink transition hover:bg-velmora-gold"
              >
                Checkout Coming Soon
              </button>
              <Link
                to="/shop"
                className="block text-center text-xs uppercase tracking-[0.28em] text-velmora-cocoa/70 transition hover:text-velmora-ink"
                onClick={() => toggleCart(false)}
              >
                Continue shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-velmora-sand bg-velmora-ivory p-5 text-velmora-cocoa">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl text-velmora-ink">Your cart is empty</h3>
              <p className="text-sm leading-7 text-velmora-cocoa/75">
                Start with a few heirloom-worthy essentials and build your everyday gold edit.
              </p>
            </div>
            <Link
              to="/shop"
              className="rounded-full bg-velmora-bronze px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink transition hover:bg-velmora-gold"
              onClick={() => toggleCart(false)}
            >
              Shop now
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
