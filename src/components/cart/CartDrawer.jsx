import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

export default function CartDrawer({
  isOpen,
  items,
  total,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-lift transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-oyster px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-velmora-goldDeep">Velmora bag</p>
            <h2 className="font-serifDisplay text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-oyster p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-goldDeep"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-bark">
            <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
            <p className="font-serifDisplay text-3xl text-velmora-ink">Your bag is waiting.</p>
            <p className="mt-3 max-w-xs text-sm leading-6">
              Add a piece from the collection and it will appear here instantly.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border-b border-velmora-oyster pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serifDisplay text-base uppercase tracking-[0.18em] text-velmora-ink">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-velmora-bark">${item.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id)}
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-goldDeep underline-offset-4 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center border border-velmora-oyster bg-velmora-parchment text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => onDecrement(item.id)}
                        className="p-2 transition hover:bg-velmora-champagne"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 px-3 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onIncrement(item.id)}
                        className="p-2 transition hover:bg-velmora-champagne"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-medium text-velmora-ink">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-velmora-oyster bg-velmora-champagne px-5 py-5 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between font-medium">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <button
            type="button"
            className="w-full bg-velmora-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-velmora-pearl transition hover:bg-velmora-goldDeep disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-bark">
            Free worldwide shipping and 30-day returns on every order.
          </p>
        </div>
      </aside>
    </>
  )
}
