import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/lib/format'

const CartDrawer = ({ isOpen, items, onClose, onIncrease, onDecrease, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-2xl transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-4 sm:px-7">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">Velmora cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Selection</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-line p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="mb-5 h-10 w-10 text-velmora-champagne" />
            <h3 className="font-serif text-3xl text-velmora-ink">Your cart is waiting</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-taupe">Add a luminous piece to begin a beautifully wrapped Velmora order.</p>
            <button type="button" onClick={onClose} className="mt-7 rounded-full bg-velmora-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-espresso">
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              <div className="space-y-5">
                {items.map((item) => (
                  <article key={item.cartKey} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-line pb-5">
                    <div className="flex aspect-square items-center justify-center rounded-xl border border-velmora-line bg-velmora-parchment text-center font-serif text-2xl uppercase tracking-[0.18em] text-velmora-gold">
                      {item.name.slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-lg uppercase tracking-[0.18em] text-velmora-ink">{item.name}</h3>
                          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-velmora-taupe">{item.tone} tone</p>
                        </div>
                        <button type="button" onClick={() => onRemove(item.cartKey)} className="text-xs uppercase tracking-[0.2em] text-velmora-taupe transition hover:text-velmora-ink">
                          Remove
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-velmora-line bg-white/70">
                          <button type="button" onClick={() => onDecrease(item.cartKey)} className="p-2 text-velmora-ink transition hover:text-velmora-gold" aria-label={`Decrease ${item.name}`}>
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-velmora-ink">{item.quantity}</span>
                          <button type="button" onClick={() => onIncrease(item.cartKey)} className="p-2 text-velmora-ink transition hover:text-velmora-gold" aria-label={`Increase ${item.name}`}>
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="font-medium text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-line bg-velmora-parchment px-5 py-5 text-velmora-ink sm:px-7">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em]"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <p className="mt-3 text-sm leading-6 text-velmora-taupe">Shipping, taxes, and gift wrap options are calculated at checkout.</p>
              <button type="button" className="mt-5 w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink shadow-soft transition hover:bg-velmora-gold">
                Checkout preview
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
