import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/storeData.js'

function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-stone-950/55 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col border-l border-stone-700/60 bg-stone-950 text-stone-50 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-stone-800 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-400">Your cart</p>
            <h2 className="font-serif text-3xl text-stone-50">Selected pieces</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-stone-700 p-2 text-stone-200 transition hover:border-amber-300/70 hover:text-amber-200"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-stone-800 bg-stone-900 p-5 text-amber-200">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl">Your cart is empty</h3>
              <p className="text-sm leading-7 text-stone-400">
                Add a few signature pieces and they’ll appear here instantly.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-stone-950 transition hover:bg-amber-200"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={`${item.slug}-${item.tone}`}
                  className="rounded-3xl border border-stone-800 bg-stone-900/80 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-2xl text-stone-50">{item.shortName}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-stone-400">
                        {item.category} · {item.tone} tone
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.slug, item.tone)}
                      className="text-xs uppercase tracking-[0.24em] text-stone-400 transition hover:text-stone-100"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/70">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, item.tone, item.quantity - 1)}
                        className="p-3 text-stone-300 transition hover:text-amber-200"
                        aria-label={`Decrease quantity for ${item.shortName}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm text-stone-50">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, item.tone, item.quantity + 1)}
                        className="p-3 text-stone-300 transition hover:text-amber-200"
                        aria-label={`Increase quantity for ${item.shortName}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-lg text-stone-50">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-stone-800 bg-stone-950/95 px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-stone-300">
                <span>Subtotal</span>
                <span className="text-base tracking-[0.18em] text-stone-50">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-400">
                Taxes and duties calculated at checkout. Complimentary gift packaging on orders over $75.
              </p>
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-amber-300 px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-stone-950 transition hover:bg-amber-200"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
