import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/lib/format'

function CartDrawer({ open, items, onClose, onIncrease, onDecrease, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-soft transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-velmora-mist/70 px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-brass">Velmora Bag</p>
            <h2 className="font-serifDisplay text-3xl font-semibold text-velmora-espresso">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-mist p-2 text-velmora-espresso transition hover:border-velmora-brass hover:text-velmora-brass focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-espresso">
            <ShoppingBag className="mb-5 h-12 w-12 text-velmora-brass" />
            <h3 className="font-serifDisplay text-3xl font-semibold">Your bag is quietly waiting.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-ink/75">Add a demi-fine piece to begin your Velmora edit.</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4 border-b border-velmora-mist/60 py-5 text-velmora-espresso">
                  <div className="flex h-24 w-20 flex-none items-center justify-center bg-velmora-blush/60 text-velmora-brass">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-${item.id}-${item.tone.toLowerCase()}-title`} className="font-serifDisplay text-base font-semibold uppercase tracking-[0.18em] text-velmora-espresso">{item.name}</h3>
                        <p id={`cart-${item.id}-${item.tone.toLowerCase()}-desc`} className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-velmora-brass">{item.tone} tone</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id, item.tone)}
                        className="text-velmora-ink/60 transition hover:text-velmora-brass focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-mist bg-velmora-parchment text-velmora-espresso">
                        <button type="button" onClick={() => onDecrease(item.id, item.tone)} className="p-2 hover:bg-velmora-blush/60" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button type="button" onClick={() => onIncrease(item.id, item.tone)} className="p-2 hover:bg-velmora-blush/60" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-velmora-espresso">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <footer className="border-t border-velmora-mist/70 bg-velmora-parchment px-5 py-5 text-velmora-espresso">
              <div className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.18em]">
                <span>Subtotal ({itemCount})</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-xs leading-5 text-velmora-ink/75">Taxes and shipping calculated at checkout. Frontend preview only.</p>
              <button type="button" className="mt-5 w-full bg-velmora-champagne px-6 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-brass hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-espresso">
                Checkout
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
