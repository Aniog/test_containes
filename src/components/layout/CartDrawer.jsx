import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ open, items, subtotal, onClose, onRemove, onQuantityChange }) {
  return (
    <div className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-jewel transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-linen p-5 sm:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-rose">Your Bag</p>
            <h2 className="font-serif text-3xl font-semibold">Cart</h2>
          </div>
          <button type="button" aria-label="Close cart" onClick={onClose} className="rounded-full border border-velmora-linen p-2 text-velmora-espresso transition hover:border-velmora-champagne hover:text-velmora-champagne">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-champagne" />
              <p className="font-serif text-3xl font-semibold text-velmora-espresso">Your cart is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-ink/75">Add a demi-fine favorite to begin your Velmora ritual.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.id}-${item.tone}`} className="flex gap-4 border-b border-velmora-linen pb-5 text-velmora-ink">
                  <div className="flex h-24 w-20 shrink-0 items-center justify-center bg-velmora-linen/70 font-serif text-3xl text-velmora-champagne">
                    V
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-base font-semibold uppercase tracking-[0.18em] text-velmora-espresso">{item.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-velmora-ink/65">{item.tone} · ${item.price}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-parchment text-velmora-espresso">
                        <button type="button" aria-label="Decrease quantity" onClick={() => onQuantityChange(item.id, item.tone, item.quantity - 1)} className="p-2 text-velmora-espresso transition hover:text-velmora-champagne">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => onQuantityChange(item.id, item.tone, item.quantity + 1)} className="p-2 text-velmora-espresso transition hover:text-velmora-champagne">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" aria-label={`Remove ${item.name}`} onClick={() => onRemove(item.id, item.tone)} className="text-velmora-ink/70 transition hover:text-velmora-rose">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-linen bg-velmora-parchment p-5 text-velmora-espresso sm:p-6">
          <div className="mb-4 flex items-center justify-between font-semibold">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <button type="button" className="w-full rounded-full bg-velmora-champagne px-5 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-espresso hover:text-velmora-ivory">
            Continue to Checkout
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-ink/70">Frontend preview only. Checkout will connect later.</p>
        </div>
      </aside>
    </div>
  )
}
