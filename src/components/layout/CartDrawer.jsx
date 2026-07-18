import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

const CartDrawer = ({ isOpen, items, onClose, onRemove, onUpdateQuantity }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-velvet transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-bronze">Velmora</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-ink/15 p-2 text-velmora-ink transition hover:bg-velmora-parchment" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-ink">
            <div className="mb-6 rounded-full border border-velmora-champagne/50 bg-velmora-parchment p-5 text-velmora-bronze">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-3xl font-semibold">Your keepsake edit is empty.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-espresso/75">Add earrings, necklaces, or huggies to begin your Velmora ritual.</p>
            <button type="button" onClick={onClose} className="mt-8 border border-velmora-ink bg-velmora-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-espresso">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-2">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-velmora-ink/10 py-5 text-velmora-ink">
                  <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center bg-velmora-parchment text-center font-serif text-2xl text-velmora-bronze">
                    V
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-velmora-ink">{item.name}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-bronze">{item.variant} tone</p>
                      </div>
                      <p className="font-serif text-lg font-semibold text-velmora-ink">${item.price}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-ink/15 bg-velmora-cream text-velmora-ink">
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} className="p-2 text-velmora-ink transition hover:bg-velmora-parchment" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-velmora-ink">{item.quantity}</span>
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} className="p-2 text-velmora-ink transition hover:bg-velmora-parchment" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.variant)} className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-bronze underline-offset-4 hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-ink/10 bg-velmora-parchment px-6 py-6 text-velmora-ink">
              <div className="flex items-center justify-between font-serif text-2xl font-semibold">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-espresso/75">Shipping and taxes calculated at checkout. Free worldwide shipping included.</p>
              <button type="button" className="mt-6 w-full border border-velmora-ink bg-velmora-ink px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-espresso">
                Checkout Preview
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
