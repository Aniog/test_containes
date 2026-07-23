import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/format'

function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal } = useCart()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-sand/30 bg-velmora-ivory shadow-velmora transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/30 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-luxe text-velmora-champagne">Your cart</p>
            <h2 className="mt-2 font-serif text-3xl text-velmora-ink">Velmora Bag</h2>
          </div>
          <button
            aria-label="Close cart"
            className="rounded-full border border-velmora-sand/40 p-2 text-velmora-espresso transition hover:bg-velmora-mist"
            onClick={() => setIsCartOpen(false)}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full bg-velmora-mist p-4 text-velmora-champagne">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-velmora-ink">Your bag is empty</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-velmora-aubergine/80">
              Add a few pieces to begin your Velmora collection.
            </p>
            <Link
              className="mt-6 rounded-full bg-velmora-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory"
              onClick={() => setIsCartOpen(false)}
              to="/shop"
            >
              Shop all pieces
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.tone}`}
                  className="grid grid-cols-[96px_1fr] gap-4 rounded-3xl border border-velmora-sand/35 bg-white p-4"
                >
                  <div className="flex aspect-square items-center justify-center rounded-2xl border border-velmora-sand/30 bg-velmora-mist">
                    <div className="text-center">
                      <p className="font-serif text-2xl uppercase tracking-[0.28em] text-velmora-espresso">
                        {item.shortName
                          .split(' ')
                          .slice(0, 2)
                          .map((word) => word[0])
                          .join('')}
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-velmora-aubergine/70">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-serif text-xl uppercase tracking-[0.18em] text-velmora-ink">{item.name}</p>
                        <p className="mt-1 text-sm text-velmora-aubergine/75">{item.tone} tone</p>
                      </div>
                      <button
                        aria-label={`Remove ${item.shortName}`}
                        className="text-velmora-aubergine/70 transition hover:text-velmora-ink"
                        onClick={() => removeItem(item.id, item.tone)}
                        type="button"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-velmora-sand/40 bg-velmora-ivory px-2 py-1">
                        <button
                          aria-label={`Decrease quantity for ${item.shortName}`}
                          className="rounded-full p-1 text-velmora-espresso transition hover:bg-velmora-mist"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          type="button"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-medium text-velmora-ink">{item.quantity}</span>
                        <button
                          aria-label={`Increase quantity for ${item.shortName}`}
                          className="rounded-full p-1 text-velmora-espresso transition hover:bg-velmora-mist"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          type="button"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-base font-semibold text-velmora-espresso">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-sand/30 px-5 py-5">
              <div className="flex items-center justify-between text-sm text-velmora-aubergine/80">
                <span>Subtotal</span>
                <span className="text-lg font-semibold text-velmora-ink">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-velmora-aubergine/75">
                Shipping and duties calculated at checkout.
              </p>
              <button
                className="mt-5 w-full rounded-full bg-velmora-ink px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ivory"
                type="button"
              >
                Checkout Coming Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
