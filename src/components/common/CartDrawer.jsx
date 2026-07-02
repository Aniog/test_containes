import { Minus, Plus, Trash2, X } from 'lucide-react'

const CartDrawer = ({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-ink/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-soft transition-transform duration-500 sm:border-l sm:border-velmora-line ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-clay">Your selection</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-line p-3 text-velmora-ink transition hover:border-velmora-gold hover:bg-velmora-gold/10" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 velmora-scrollbar">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl text-velmora-ink">Your cart is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-forest/75">Add a luminous gold piece to begin your Velmora ritual.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => (
                <div key={item.id} className="border-b border-velmora-line/80 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-velmora-ink">{item.name}</h3>
                      <p className="mt-1 text-sm text-velmora-clay">${item.price} · {item.material}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.id)} className="rounded-full p-2 text-velmora-clay transition hover:bg-velmora-gold/10 hover:text-velmora-ink" aria-label={`Remove ${item.name}`}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center overflow-hidden rounded-full border border-velmora-line bg-velmora-ivory text-velmora-ink">
                      <button type="button" onClick={() => onDecrement(item.id)} className="p-3 transition hover:bg-velmora-champagne/50" aria-label={`Decrease ${item.name}`}>
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-bold">{item.quantity}</span>
                      <button type="button" onClick={() => onIncrement(item.id)} className="p-3 transition hover:bg-velmora-champagne/50" aria-label={`Increase ${item.name}`}>
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-semibold text-velmora-ink">${item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line bg-velmora-ivory px-6 py-6 text-velmora-ink">
          <div className="flex items-center justify-between font-semibold">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-forest/70">Shipping and taxes calculated at checkout. Free worldwide shipping on every order.</p>
          <button type="button" className="mt-5 w-full rounded-full bg-velmora-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:bg-velmora-champagne">
            Checkout soon
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
