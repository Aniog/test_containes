import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '../data/products'

export default function CartDrawer({ isOpen, items, subtotal, onClose, onIncrease, onDecrease, onRemove }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className="absolute inset-0 bg-velmora-ink/50 transition duration-300"
      />
      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-velvet transition duration-500 sm:w-[28rem]"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-velmora-bronze">Your selection</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-sand p-2 text-velmora-ink transition hover:border-velmora-champagne hover:text-velmora-bronze"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-champagne" />
              <h3 className="font-serif text-2xl">Your cart is awaiting sparkle.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-espresso/75">
                Add a Velmora favorite and it will appear here for review.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="border-b border-velmora-sand pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-base uppercase tracking-[0.2em] text-velmora-ink">{item.name}</h3>
                      <p className="mt-2 text-sm text-velmora-espresso/75">{item.variant} tone</p>
                      <p className="mt-2 font-serif text-lg text-velmora-ink">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.variant)}
                      className="text-xs uppercase tracking-[0.18em] text-velmora-bronze underline-offset-4 transition hover:text-velmora-ink hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-ink">
                    <button
                      type="button"
                      onClick={() => onDecrease(item.id, item.variant)}
                      className="p-3 transition hover:text-velmora-bronze"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onIncrease(item.id, item.variant)}
                      className="p-3 transition hover:text-velmora-bronze"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand px-6 py-6">
          <div className="mb-4 flex items-center justify-between font-serif text-2xl text-velmora-ink">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-5 text-sm leading-6 text-velmora-espresso/75">
            Taxes and final delivery options are calculated at checkout.
          </p>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-ink disabled:cursor-not-allowed disabled:opacity-50"
            disabled={items.length === 0}
          >
            Checkout later
          </button>
        </div>
      </aside>
    </div>
  )
}
