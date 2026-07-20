import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, closeCart, removeItem, updateQuantity } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={closeCart}
        className={`absolute inset-0 bg-velmora-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-soft transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-cocoa/70">Velmora Bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-ink/15 bg-transparent p-2 text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-cream"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-ink">
            <ShoppingBag className="mb-5 h-12 w-12 text-velmora-champagne" />
            <h3 className="font-serif text-3xl">Your jewelry box is waiting.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-cocoa/75">
              Add a favorite piece and we will keep it here while you continue browsing.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-7 rounded-full bg-velmora-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-cocoa"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article key={item.key} className="grid grid-cols-[72px_1fr] gap-4 border-b border-velmora-ink/10 pb-5">
                  <div className="flex h-20 w-[72px] items-center justify-center rounded-t-full bg-velmora-blush text-center font-serif text-2xl text-velmora-cocoa">
                    {item.name.charAt(0)}
                  </div>
                  <div className="min-w-0 text-velmora-ink">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-lg uppercase tracking-[0.14em] leading-6">{item.name}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-cocoa/70">
                          {item.tone} tone · {item.category}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-ink/15 bg-velmora-cream text-velmora-ink">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="bg-transparent p-2 text-velmora-ink hover:text-velmora-champagne"
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="bg-transparent p-2 text-velmora-ink hover:text-velmora-champagne"
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="bg-transparent text-xs uppercase tracking-[0.18em] text-velmora-cocoa/70 underline-offset-4 hover:text-velmora-ink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="border-t border-velmora-ink/10 bg-velmora-cream px-6 py-6 text-velmora-ink">
              <div className="mb-4 flex items-center justify-between font-serif text-2xl">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-5 text-sm text-velmora-cocoa/75">Shipping and taxes are calculated at checkout.</p>
              <button
                type="button"
                className="w-full rounded-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-glow transition hover:bg-velmora-ink hover:text-velmora-cream"
              >
                Checkout Coming Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
