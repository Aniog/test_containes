import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

function CartDrawer({ open, items, onClose, onIncrease, onDecrease, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-drawer transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-taupe/30 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-velmora-gold">Velmora</p>
            <h2 className="font-serif text-2xl">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close cart" className="rounded-full p-2 hover:bg-velmora-champagne">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="grid min-h-[360px] place-items-center text-center">
              <div>
                <ShoppingBag className="mx-auto h-10 w-10 text-velmora-gold" />
                <h3 className="mt-5 font-serif text-2xl">Your jewelry box is empty</h3>
                <p className="mt-3 text-sm leading-6 text-velmora-espresso/65">
                  Add a favorite piece and it will appear here for review.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-7 bg-velmora-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-pearl transition hover:bg-velmora-bronze"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <ul className="grid gap-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="border-b border-velmora-taupe/25 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-sm uppercase tracking-[0.2em]">{item.name}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-velmora-espresso/55">
                        {item.tone || 'Gold'} tone
                      </p>
                      <p className="mt-3 text-sm font-semibold">${item.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.tone)}
                      className="rounded-full p-2 text-velmora-espresso/55 transition hover:bg-velmora-champagne hover:text-velmora-espresso"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 inline-flex items-center border border-velmora-taupe/40">
                    <button
                      type="button"
                      onClick={() => onDecrease(item.id, item.tone)}
                      className="p-3 transition hover:bg-velmora-champagne"
                      aria-label={`Decrease ${item.name}`}
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onIncrease(item.id, item.tone)}
                      className="p-3 transition hover:bg-velmora-champagne"
                      aria-label={`Increase ${item.name}`}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-velmora-taupe/30 px-6 py-6">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em]">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <p className="mt-3 text-xs leading-5 text-velmora-espresso/60">
            Shipping and taxes calculated at checkout. Free worldwide shipping included.
          </p>
          <button
            type="button"
            className="mt-5 w-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-bronze disabled:cursor-not-allowed disabled:bg-velmora-taupe"
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
