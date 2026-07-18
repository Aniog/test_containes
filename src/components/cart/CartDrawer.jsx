import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-ink/45 transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-label="Close cart"
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-editorial transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-widerluxe text-velmora-taupe">Velmora Bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-line p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-bronze" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <div className="mb-5 rounded-full bg-velmora-champagne p-5 text-velmora-bronze">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl">Your jewelry box is waiting.</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-velmora-taupe">Add a favorite demi-fine piece and it will appear here.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="border-b border-velmora-line pb-5">
                  <div className="flex gap-4">
                    <div className="flex h-24 w-20 shrink-0 items-center justify-center bg-velmora-champagne text-center font-serif text-3xl text-velmora-bronze">
                      V
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={`cart-${item.id}-${item.tone}-title`} className="font-serif text-base uppercase tracking-luxe text-velmora-ink">{item.name}</h3>
                          <p className="mt-1 text-xs uppercase tracking-luxe text-velmora-taupe">{item.tone}</p>
                        </div>
                        <button type="button" onClick={() => onRemove(item)} className="text-xs uppercase tracking-luxe text-velmora-taupe transition hover:text-velmora-bronze">
                          Remove
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-velmora-line text-velmora-ink">
                          <button type="button" onClick={() => onDecrement(item)} className="p-2 transition hover:bg-velmora-champagne" aria-label={`Decrease ${item.name}`}>
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                          <button type="button" onClick={() => onIncrement(item)} className="p-2 transition hover:bg-velmora-champagne" aria-label={`Increase ${item.name}`}>
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-semibold text-velmora-ink">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line px-6 py-6 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-luxe">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <button type="button" className="w-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-ivory">
            Continue to Checkout
          </button>
          <p className="mt-3 text-center text-xs text-velmora-taupe">Frontend preview checkout placeholder.</p>
        </div>
      </aside>
    </div>
  )
}
