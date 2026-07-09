import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'

export default function CartDrawer() {
  const { items, isOpen, subtotal, closeCart, removeItem, updateQuantity } =
    useCart()

  return (
    <div
      className={isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
      aria-hidden={!isOpen}
    >
      <div
        className={`fixed inset-0 z-[70] bg-velmora-ink/60 transition duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-velmora-ink text-velmora-ivory shadow-2xl transition duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-muted">
              Shopping Bag
            </p>
            <h2 className="font-display text-3xl text-velmora-ivory">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="mt-14 rounded-[2rem] border border-velmora-line bg-velmora-ivory/5 px-6 py-10 text-center">
              <p className="font-display text-3xl text-velmora-ivory">A little empty</p>
              <p className="mt-3 text-sm leading-7 text-velmora-muted">
                Add a piece you can wear now, gift later, and keep close for years.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-velmora-gold bg-velmora-gold px-5 py-3 text-xs uppercase tracking-[0.24em] text-velmora-cocoa transition hover:bg-velmora-gold-soft"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article
                  key={item.cartKey}
                  className="rounded-[1.75rem] border border-velmora-line bg-velmora-ivory/5 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-2xl uppercase tracking-[0.18em] text-velmora-ivory">
                        {item.name}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-velmora-muted">
                        {item.variant} · {item.category}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.cartKey)}
                      className="text-xs uppercase tracking-[0.2em] text-velmora-muted transition hover:text-velmora-ivory"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-velmora-line px-2 py-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-velmora-ivory transition hover:bg-velmora-ivory/10"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm text-velmora-ivory">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-velmora-ivory transition hover:bg-velmora-ivory/10"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-velmora-ivory">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line px-6 py-6">
          <div className="mb-5 flex items-center justify-between text-sm uppercase tracking-[0.22em] text-velmora-muted">
            <span>Subtotal</span>
            <span className="text-velmora-ivory">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-gold px-5 py-4 text-xs uppercase tracking-[0.26em] text-velmora-cocoa transition hover:bg-velmora-gold-soft"
          >
            Checkout Soon
          </button>
          <Link
            to="/shop"
            className="mt-3 block text-center text-xs uppercase tracking-[0.24em] text-velmora-muted transition hover:text-velmora-ivory"
            onClick={closeCart}
          >
            Keep Browsing
          </Link>
        </div>
      </aside>
    </div>
  )
}
