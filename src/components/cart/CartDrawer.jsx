import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

const formatPrice = (value) => `$${value.toFixed(0)}`

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-2xl transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-gold/25 px-5 py-4 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Velmora bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-ink/15 p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <div className="mb-5 rounded-full bg-velmora-parchment p-5 text-velmora-gold">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl">Your jewelry box is empty</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-taupe">Add a piece from the collection and it will appear here, ready for checkout.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.id}-${item.variant}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-ink/10 pb-5">
                  <div className="flex aspect-square items-center justify-center overflow-hidden bg-velmora-parchment text-center text-velmora-ink">
                    <div className="px-3">
                      <p className="font-serif text-3xl text-velmora-gold">{item.name.charAt(0)}</p>
                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-velmora-taupe">{item.category || 'Fine Jewelry'}</p>
                    </div>
                  </div>
                  <div className="min-w-0 text-velmora-ink">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-${item.id}-${item.variant}-name`} className="font-serif text-lg uppercase tracking-[0.18em] text-velmora-ink">{item.name}</h3>
                        <p id={`cart-${item.id}-${item.variant}-variant`} className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-taupe">{item.variant} tone</p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-ink/15 text-velmora-ink">
                        <button type="button" className="p-2 transition hover:text-velmora-gold" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}>
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" className="p-2 transition hover:text-velmora-gold" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}>
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe transition hover:text-velmora-gold" onClick={() => onRemove(item.id, item.variant)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-gold/25 bg-velmora-ivory px-5 py-5 text-velmora-ink sm:px-7">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="uppercase tracking-[0.2em] text-velmora-taupe">Subtotal · {itemCount} item{itemCount === 1 ? '' : 's'}</span>
            <span className="font-serif text-2xl text-velmora-ink">{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="w-full rounded-full bg-velmora-gold px-7 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-velmora-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-soft-gold disabled:cursor-not-allowed disabled:opacity-60" disabled={items.length === 0}>
            Checkout
          </button>
          <p className="mt-3 text-center text-xs text-velmora-taupe">Secure checkout can be connected when you are ready.</p>
        </div>
      </aside>
    </>
  )
}
