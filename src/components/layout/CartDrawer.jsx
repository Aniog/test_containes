import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice, getCartSubtotal } from '@/lib/cart'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = getCartSubtotal(items)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-onyx/45 transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-espresso text-velmora-ivory shadow-velmora-deep transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-white/15 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-velmora-champagne">Your Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ivory">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 p-2 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ivory">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
              <h3 className="font-serif text-3xl">Your jewelry box is waiting.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-champagne">
                Add a piece from the collection and it will appear here for review.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="border-b border-white/10 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-sm uppercase tracking-[0.22em] text-velmora-ivory">{item.name}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-velmora-champagne">{item.material}</p>
                      <p className="mt-3 text-sm font-bold text-velmora-gold">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id)}
                      className="text-velmora-champagne transition hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 inline-flex items-center border border-white/20 text-velmora-ivory">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-velmora-gold"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 px-3 text-center text-sm font-bold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-velmora-gold"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-white/15 px-6 py-6 text-velmora-ivory">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em]">
            <span>Subtotal</span>
            <span className="font-bold text-velmora-gold">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-xs leading-5 text-velmora-champagne">Shipping and taxes are calculated at checkout. Free worldwide shipping is already included.</p>
          <button
            type="button"
            className="mt-5 w-full bg-velmora-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-onyx transition hover:bg-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-ivory disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
