import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-velvet transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-stone px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Velmora Bag</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-stone p-2 text-velmora-espresso hover:border-velmora-gold" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-velmora-gold" aria-hidden="true" />
            <p className="mt-5 font-serif text-3xl font-semibold">Your bag is waiting.</p>
            <p className="mt-3 text-sm leading-6 text-velmora-taupe">Add a luminous piece to begin your Velmora ritual.</p>
            <button type="button" onClick={onClose} className="mt-7 rounded-full bg-velmora-espresso px-7 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl hover:bg-velmora-cocoa">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-3">
              {items.map((item) => (
                <div key={item.lineId} className="border-b border-velmora-stone/70 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-velmora-espresso">{item.name}</p>
                      <p className="mt-1 text-sm text-velmora-taupe">${item.price} · {item.variant}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.lineId)} className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-taupe hover:text-velmora-espresso">
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-stone bg-velmora-pearl">
                      <button type="button" onClick={() => onUpdateQuantity(item.lineId, item.quantity - 1)} className="p-3 text-velmora-espresso" aria-label={`Decrease ${item.name} quantity`}>
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button type="button" onClick={() => onUpdateQuantity(item.lineId, item.quantity + 1)} className="p-3 text-velmora-espresso" aria-label={`Increase ${item.name} quantity`}>
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-semibold text-velmora-espresso">${item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-stone bg-velmora-pearl px-6 py-6">
              <div className="flex items-center justify-between font-semibold text-velmora-espresso">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-velmora-taupe">Shipping and taxes calculated at checkout. Free worldwide shipping included.</p>
              <button type="button" className="mt-5 w-full rounded-full bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-pearl">
                Checkout Preview
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
