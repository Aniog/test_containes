import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

export default function CartDrawer({
  open,
  items,
  subtotal,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-velmora-ink/55 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-soft transition-transform duration-500 sm:w-[28rem] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widestLuxury text-velmora-gold">
              Your Cart
            </p>
            <h2 className="font-serif text-3xl font-medium text-velmora-ink">
              Velmora pieces
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-mist p-3 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-5 rounded-full bg-velmora-sand p-5 text-velmora-ink">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl text-velmora-ink">Your cart is waiting</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-taupe">
                Add a favorite bestseller or a gifting set to begin your Velmora ritual.
              </p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="border border-velmora-mist bg-velmora-ivory p-4">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg font-semibold uppercase tracking-widest text-velmora-ink">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-velmora-taupe">
                        {item.variant} tone · ${item.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.variant)}
                      className="self-start text-xs uppercase tracking-widest text-velmora-taupe transition hover:text-velmora-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center border border-velmora-mist bg-velmora-pearl text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => onDecrement(item.id, item.variant)}
                        className="p-3 transition hover:bg-velmora-sand"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onIncrement(item.id, item.variant)}
                        className="p-3 transition hover:bg-velmora-sand"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="font-semibold text-velmora-ink">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-velmora-mist px-5 py-5">
          <div className="mb-4 flex items-center justify-between text-velmora-ink">
            <span className="text-sm uppercase tracking-widest text-velmora-taupe">Subtotal</span>
            <span className="font-serif text-3xl">${subtotal}</span>
          </div>
          <button
            type="button"
            className="w-full bg-velmora-ink px-6 py-4 text-sm font-semibold uppercase tracking-widest text-velmora-ivory transition hover:bg-velmora-cocoa disabled:cursor-not-allowed disabled:opacity-50"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-velmora-taupe">
            Free worldwide shipping and 30-day returns are included.
          </p>
        </div>
      </aside>
    </div>
  )
}
