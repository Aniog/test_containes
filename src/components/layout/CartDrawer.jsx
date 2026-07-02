import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, subtotal, onClose, onRemove, onUpdateQuantity }) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-mink">Your cart</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Velmora edit</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close cart" className="rounded-full border border-velmora-espresso/10 p-3 text-velmora-espresso transition hover:border-velmora-champagne hover:text-velmora-champagne">
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <div className="mb-5 rounded-full bg-velmora-parchment p-5 text-velmora-champagne">
                <ShoppingBag className="h-8 w-8" strokeWidth={1.4} />
              </div>
              <p className="font-serif text-3xl">Your jewelry box is empty.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-mink">Add a piece from the collection and it will appear here, ready for checkout.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.id}-${item.variant}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-espresso/10 pb-5">
                  <div className="overflow-hidden rounded-t-full bg-velmora-parchment">
                    <img
                      alt={item.name}
                      className="aspect-[3/4] h-full w-full object-cover"
                      data-strk-img-id={`home-best-${item.id}-primary`}
                      data-strk-img={`[cart-title-${item.id}] [cart-material-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="240"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="min-w-0 text-velmora-espresso">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-title-${item.id}`} className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">{item.name}</h3>
                        <p id={`cart-material-${item.id}`} className="mt-1 text-sm text-velmora-mink">{item.variant} tone · {item.material}</p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-espresso">${item.price * item.quantity}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-espresso/15 text-velmora-espresso">
                        <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} className="p-2 transition hover:text-velmora-champagne">
                          <Minus className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} className="p-2 transition hover:text-velmora-champagne">
                          <Plus className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button type="button" aria-label={`Remove ${item.name}`} onClick={() => onRemove(item.id, item.variant)} className="text-velmora-mink transition hover:text-velmora-espresso">
                        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-espresso/10 bg-velmora-parchment/50 px-5 py-5 text-velmora-espresso sm:px-7">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em]">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-mink">Shipping and taxes are calculated at checkout. Free worldwide shipping is already included.</p>
          <button type="button" className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-cocoa">
            Continue to checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
