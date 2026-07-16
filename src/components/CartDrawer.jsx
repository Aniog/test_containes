import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ open, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const freeShipping = subtotal >= 75

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-500 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-[-30px_0_90px_rgba(22,17,13,0.22)] transition-transform duration-500 sm:rounded-l-[2rem] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/60 px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-bronze">Velmora Bag</p>
            <h2 className="mt-1 font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-sand bg-transparent text-velmora-ink transition-colors hover:border-velmora-champagne hover:text-velmora-bronze"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-velmora-parchment text-velmora-bronze">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-velmora-ink">Your bag is waiting.</h3>
            <p className="mt-3 text-sm leading-7 text-velmora-espresso/70">
              Add a golden keepsake to begin your Velmora ritual.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="rounded-[1.35rem] border border-velmora-sand/60 bg-white/45 p-4 text-velmora-ink">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-base uppercase tracking-[0.2em] text-velmora-ink">{item.product.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">{item.product.category}</p>
                      <p className="mt-3 text-sm font-semibold text-velmora-ink">${item.product.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.product.id)}
                      className="rounded-full bg-transparent p-2 text-velmora-espresso/60 transition-colors hover:text-velmora-bronze"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => onDecrement(item.product.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-velmora-ink hover:text-velmora-bronze"
                        aria-label={`Decrease ${item.product.name} quantity`}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onIncrement(item.product.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-velmora-ink hover:text-velmora-bronze"
                        aria-label={`Increase ${item.product.name} quantity`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-velmora-ink">${item.product.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-velmora-sand/60 bg-velmora-parchment/70 p-5 text-velmora-ink">
          <div className="mb-4 rounded-full bg-velmora-ivory px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-velmora-bronze">
            {freeShipping ? 'Complimentary shipping unlocked' : `$${Math.max(75 - subtotal, 0)} away from free shipping`}
          </div>
          <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition-all duration-300 hover:bg-velmora-bronze hover:text-velmora-ivory disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Checkout Later
          </button>
          <p className="mt-3 text-center text-xs leading-6 text-velmora-espresso/65">
            Checkout integration can be connected when you are ready.
          </p>
        </div>
      </aside>
    </>
  )
}
