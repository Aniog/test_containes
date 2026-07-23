import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ open, items, subtotal, onClose, onRemove, onUpdateQuantity }) {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col bg-velmora-ivory text-velmora-ink shadow-soft transition-transform duration-500 sm:border-l sm:border-velmora-line ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Velmora</p>
            <h2 className="font-serif text-3xl font-medium text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-line bg-velmora-porcelain p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 rounded-full border border-velmora-line bg-velmora-porcelain p-5 text-velmora-gold">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-3xl text-velmora-ink">Your jewelry box is empty</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-taupe">
              Add a luminous piece from the collection and it will appear here.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-velmora-gold px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
              {items.map((item) => (
                <article key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-velmora-line/70 pb-5">
                  <div className="flex h-24 w-20 shrink-0 items-center justify-center rounded-t-full bg-velmora-champagne/60 text-center font-serif text-2xl text-velmora-gold">
                    V
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-velmora-taupe">{item.variant} tone</p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center overflow-hidden rounded-full border border-velmora-line bg-velmora-porcelain text-velmora-ink">
                        <button
                          type="button"
                          className="px-3 py-2 transition hover:bg-velmora-champagne/70"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          className="px-3 py-2 transition hover:bg-velmora-champagne/70"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-taupe underline decoration-velmora-line underline-offset-4 transition hover:text-velmora-gold"
                        onClick={() => onRemove(item.id, item.variant)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-line bg-velmora-porcelain px-5 py-5">
              <div className="flex items-center justify-between text-sm text-velmora-taupe">
                <span>{itemCount} item{itemCount === 1 ? '' : 's'}</span>
                <span>Complimentary worldwide shipping</span>
              </div>
              <div className="mt-3 flex items-center justify-between font-serif text-3xl text-velmora-ink">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-velmora-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:-translate-y-0.5 hover:bg-velmora-gold hover:text-velmora-ink hover:shadow-glow"
              >
                Checkout Coming Soon
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-velmora-taupe">
                Secure checkout can be connected when you are ready to launch.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
