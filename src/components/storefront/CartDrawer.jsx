import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-2xl transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-clay">Your Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-sand bg-transparent p-2 text-velmora-ink transition hover:border-velmora-champagne hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-gold" />
              <h3 className="font-serif text-3xl">Your bag is waiting.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-clay">
                Add your first demi-fine piece and it will appear here for a seamless checkout later.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="border-b border-velmora-sand pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg uppercase tracking-[0.16em] text-velmora-ink">{item.name}</p>
                      <p className="mt-1 text-sm text-velmora-clay">{item.tone} tone · ${item.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item)}
                      className="rounded-full bg-transparent p-2 text-velmora-clay transition hover:bg-velmora-mist hover:text-velmora-rouge"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-sand bg-velmora-mist text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => onDecrement(item)}
                        className="bg-transparent px-3 py-2 text-velmora-ink transition hover:text-velmora-gold"
                        aria-label={`Decrease ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onIncrement(item)}
                        className="bg-transparent px-3 py-2 text-velmora-ink transition hover:text-velmora-gold"
                        aria-label={`Increase ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-semibold text-velmora-ink">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand bg-velmora-mist px-6 py-5 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.22em] text-velmora-clay">
            <span>Subtotal · {totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
            <span className="font-semibold text-velmora-ink">${subtotal}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2"
          >
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs text-velmora-clay">Taxes and gifting options calculated at checkout.</p>
        </div>
      </aside>
    </div>
  )
}
