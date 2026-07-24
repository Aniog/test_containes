import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

function CartDrawer({ isOpen, items, subtotal, onClose, onRemove, onUpdateQuantity }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-velvet transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-velmora-gold">Velmora Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Selection</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-sand p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
            <p className="font-serif text-3xl text-velmora-ink">Your cart is quietly waiting.</p>
            <p className="mt-3 font-sans text-sm leading-6 text-velmora-taupe">
              Add a favorite piece and it will appear here with easy quantity controls.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-5">
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="border-b border-velmora-sand/80 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg uppercase leading-tight tracking-[0.18em] text-velmora-ink">
                        {item.name}
                      </p>
                      <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-velmora-taupe">
                        {item.variant} tone · ${item.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.variant)}
                      className="text-velmora-taupe transition hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center border border-velmora-sand bg-velmora-ivory text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-2 text-velmora-ink transition hover:bg-velmora-sand/60 focus:outline-none focus:ring-2 focus:ring-velmora-gold"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 px-3 text-center font-sans text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-2 text-velmora-ink transition hover:bg-velmora-sand/60 focus:outline-none focus:ring-2 focus:ring-velmora-gold"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-sans text-sm font-semibold text-velmora-ink">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-velmora-sand bg-velmora-ivory px-6 py-5 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between font-sans text-sm uppercase tracking-[0.2em]">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <button
            type="button"
            className="w-full bg-velmora-ink px-5 py-4 font-sans text-xs font-bold uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-ivory"
          >
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center font-sans text-xs leading-5 text-velmora-taupe">
            Free worldwide shipping and 30-day returns on every Velmora order.
          </p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
