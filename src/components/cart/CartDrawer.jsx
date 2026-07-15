import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from './CartContext.jsx'

export default function CartDrawer() {
  const { items, totals, isCartOpen, closeCart, removeItem, updateQuantity } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className={`absolute inset-0 bg-velmora-ink/45 transition-opacity ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-soft transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">Velmora</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-linen p-3 text-velmora-ink transition hover:border-velmora-champagne hover:text-velmora-bronze"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-champagne" />
              <p className="font-serif text-3xl">Your jewelry box is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-mist">
                Add a favorite piece and it will appear here, ready for gifting or keeping.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={item.key} className="border-b border-velmora-linen pb-5 text-velmora-ink">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg uppercase tracking-[0.2em] text-velmora-ink">
                        {item.product.name}
                      </h3>
                      <p className="mt-1 text-sm text-velmora-mist">{item.tone} tone · ${item.product.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs uppercase tracking-[0.2em] text-velmora-bronze transition hover:text-velmora-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-cream text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="p-3 text-velmora-ink"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="p-3 text-velmora-ink"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-serif text-2xl text-velmora-ink">${item.product.price * item.quantity}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <footer className="border-t border-velmora-linen bg-velmora-cream px-6 py-6 text-velmora-ink">
          <div className="flex items-center justify-between font-serif text-2xl">
            <span>Subtotal</span>
            <span>${totals.subtotal}</span>
          </div>
          <p className="mt-2 text-sm text-velmora-mist">Shipping and gifting options are calculated at checkout.</p>
          <button className="mt-5 w-full rounded-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-pearl">
            Checkout Preview
          </button>
        </footer>
      </aside>
    </div>
  )
}
