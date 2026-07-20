import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

const formatPrice = (value) => `$${value.toFixed(0)}`

function CartDrawer({ isOpen, items, onClose, onQuantityChange, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-soft transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-blush px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-umber">
              Velmora Bag
            </p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-blush p-2 text-velmora-ink transition-colors hover:border-velmora-champagne hover:bg-velmora-champagne/15"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="velmora-scrollbar flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <div className="mb-5 rounded-full border border-velmora-blush bg-velmora-ivory p-5 text-velmora-gold">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl font-semibold">Your bag is waiting</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-umber">
                Add a luminous everyday piece or a ready-to-gift set to begin.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.tone}`}
                  className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-blush pb-5"
                >
                  <div className="overflow-hidden rounded-2xl bg-velmora-blush">
                    <div className="flex aspect-square h-full w-full items-center justify-center bg-gradient-to-br from-velmora-blush via-velmora-cream to-velmora-champagne/35 p-4 text-center">
                      <span className="font-serif text-2xl font-semibold uppercase tracking-[0.16em] text-velmora-espresso">
                        {item.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0 text-velmora-ink">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-base font-semibold uppercase tracking-[0.18em]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-umber">
                          {item.tone} Tone
                        </p>
                      </div>
                      <p className="font-semibold text-velmora-ink">{formatPrice(item.price)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-blush bg-velmora-ivory text-velmora-ink">
                        <button
                          type="button"
                          onClick={() => onQuantityChange(item.id, item.tone, item.quantity - 1)}
                          className="p-2 text-velmora-ink hover:text-velmora-gold"
                          aria-label={`Decrease ${item.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onQuantityChange(item.id, item.tone, item.quantity + 1)}
                          className="p-2 text-velmora-ink hover:text-velmora-gold"
                          aria-label={`Increase ${item.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id, item.tone)}
                        className="rounded-full p-2 text-velmora-umber transition-colors hover:bg-velmora-blush hover:text-velmora-ink"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-blush bg-velmora-cream px-6 py-6 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between text-base font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-5 text-sm leading-6 text-velmora-umber">
            Complimentary worldwide shipping and 30-day returns are included.
          </p>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-cream disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Checkout Later
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
