import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import Button from '@/components/common/Button.jsx'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-lift transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-hairline px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
              Your Selection
            </p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-hairline p-2 text-velmora-ink transition hover:border-velmora-champagne hover:bg-velmora-blush"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <div className="mb-5 rounded-full bg-velmora-blush p-5 text-velmora-antique">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl font-semibold">Your cart is quietly waiting.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-taupe">
                Add a piece from the collection and it will appear here for review.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-[96px_1fr] gap-4 border-b border-velmora-hairline pb-5"
                >
                  <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-velmora-blush via-velmora-porcelain to-velmora-champagne/40 text-velmora-antique">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <div className="min-w-0 text-velmora-ink">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3
                          id={`cart-${item.titleId}`}
                          className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-velmora-ink"
                        >
                          {item.name}
                        </h3>
                        <p id={`cart-${item.descId}`} className="mt-1 text-xs text-velmora-taupe">
                          {item.category} · {item.description}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">${item.price}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-velmora-hairline bg-velmora-cream text-velmora-ink">
                        <button
                          type="button"
                          className="p-2 transition hover:text-velmora-antique"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          className="p-2 transition hover:text-velmora-antique"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe underline-offset-4 transition hover:text-velmora-ink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-hairline bg-velmora-cream px-5 py-5 text-velmora-ink sm:px-7">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.18em]">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <Button className="w-full" disabled={items.length === 0}>
            Checkout Soon
          </Button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-taupe">
            Checkout integration can be connected next. Shipping and returns are calculated at checkout.
          </p>
        </div>
      </aside>
    </div>
  )
}
