import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-editorial transition duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-taupe/30 px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-burnished">Velmora bag</p>
            <h2 className="font-serif text-2xl">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-taupe/40 transition hover:border-velmora-gold hover:bg-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="velmora-scrollbar flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-gold" />
              <p className="font-serif text-2xl text-velmora-espresso">Your cart is waiting.</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-velmora-espresso/70">
                Add a piece of demi-fine gold jewelry and it will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-velmora-taupe/25 pb-5">
                  <div className="h-24 w-20 shrink-0 overflow-hidden bg-velmora-ivory">
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`cart-${item.variant.toLowerCase()}-${item.imageId}`}
                      data-strk-img={`[cart-title-${item.variant}-${item.id}] [cart-desc-${item.variant}-${item.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-title-${item.variant}-${item.id}`} className="font-serif text-sm uppercase tracking-luxury text-velmora-espresso">{item.name}</h3>
                        <p id={`cart-desc-${item.variant}-${item.id}`} className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-espresso/60">{item.variant} tone</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id, item.variant)}
                        className="text-velmora-espresso/55 transition hover:text-velmora-clay"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center border border-velmora-taupe/40">
                        <button type="button" onClick={() => onDecrement(item.id, item.variant)} className="p-2" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onIncrement(item.id, item.variant)} className="p-2" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-semibold text-velmora-espresso">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-taupe/30 p-5">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-luxury">
            <span>Subtotal</span>
            <span className="font-bold">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-pearl transition hover:bg-velmora-gold hover:text-velmora-espresso disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Checkout soon
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-espresso/60">
            Checkout integration can be connected when your real catalog is ready.
          </p>
        </div>
      </aside>
    </div>
  )
}
