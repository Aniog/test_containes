import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ open, items, subtotal, onClose, onRemove, onQuantityChange }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-velmora-espresso/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-velmoraLift transition duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-taupe">Your cart</p>
            <h2 className="font-serifDisplay text-3xl font-semibold text-velmora-espresso">A considered edit</h2>
          </div>
          <button type="button" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center border border-velmora-espresso/15 text-velmora-espresso transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <ShoppingBag className="mb-5 text-velmora-champagne" size={42} />
              <p className="font-serifDisplay text-3xl font-semibold">Your cart is empty</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-taupe">Add a piece from the collection to begin your Velmora ritual.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.key} className="border-b border-velmora-espresso/10 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="font-serifDisplay text-lg font-semibold uppercase tracking-[0.18em] text-velmora-espresso">{item.name}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-velmora-taupe">{item.variant}</p>
                      <p className="text-sm font-semibold text-velmora-espresso">${item.price}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.key)} className="text-velmora-taupe transition hover:text-velmora-espresso" aria-label={`Remove ${item.name}`}>
                      <Trash2 size={17} />
                    </button>
                  </div>
                  <div className="mt-4 inline-flex items-center border border-velmora-espresso/15 text-velmora-espresso">
                    <button type="button" onClick={() => onQuantityChange(item.key, item.quantity - 1)} className="flex h-9 w-9 items-center justify-center transition hover:bg-velmora-sand" aria-label="Decrease quantity">
                      <Minus size={14} />
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                    <button type="button" onClick={() => onQuantityChange(item.key, item.quantity + 1)} className="flex h-9 w-9 items-center justify-center transition hover:bg-velmora-sand" aria-label="Increase quantity">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-espresso/10 p-6">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.2em] text-velmora-espresso">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <button type="button" className="w-full bg-velmora-champagne px-5 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-taupe">Taxes and shipping calculated at checkout.</p>
        </div>
      </aside>
    </div>
  )
}
