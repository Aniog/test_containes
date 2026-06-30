import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-espresso text-velmora-ivory shadow-2xl transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-champagne/25 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-champagne">Velmora Bag</p>
            <h2 className="mt-1 font-serif text-3xl">{totalCount} {totalCount === 1 ? 'item' : 'items'}</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-champagne/30 p-2 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ivory">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-champagne" />
              <p className="font-serif text-3xl">Your bag is quietly waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-cream">Add a demi-fine piece to begin your Velmora ritual.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="border-b border-velmora-champagne/20 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg uppercase tracking-[0.16em] text-velmora-ivory">{item.name}</h3>
                      <p className="mt-1 text-sm text-velmora-cream">${item.price} · {item.variant}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.key)} className="text-xs uppercase tracking-widest text-velmora-champagne transition hover:text-velmora-ivory">
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-velmora-champagne/30 text-velmora-ivory">
                      <button type="button" onClick={() => onDecrement(item.key)} className="p-2 transition hover:bg-velmora-champagne/10" aria-label={`Decrease ${item.name}`}>
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm">{item.quantity}</span>
                      <button type="button" onClick={() => onIncrement(item.key)} className="p-2 transition hover:bg-velmora-champagne/10" aria-label={`Increase ${item.name}`}>
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-serif text-xl text-velmora-ivory">${item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-champagne/25 p-6">
          <div className="mb-4 flex items-center justify-between text-velmora-ivory">
            <span className="text-sm uppercase tracking-widest text-velmora-cream">Subtotal</span>
            <span className="font-serif text-3xl">${subtotal}</span>
          </div>
          <button type="button" className="w-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-cream disabled:cursor-not-allowed disabled:opacity-60" disabled={!items.length}>
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-cream">Secure checkout can be connected when you are ready.</p>
        </div>
      </aside>
    </div>
  )
}
