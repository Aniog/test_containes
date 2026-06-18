import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-espresso/45 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-soft transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-taupe/60 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Velmora Bag</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-taupe/70 p-2 text-velmora-espresso transition hover:border-velmora-champagne hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-cocoa">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
              <p className="font-serif text-3xl text-velmora-espresso">Your bag is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6">
                Add a keepsake piece for everyday shine, gifting, or the next dinner reservation.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={item.id} className="border-b border-velmora-taupe/50 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl uppercase tracking-[0.22em] text-velmora-espresso">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-velmora-cocoa">{item.variant} tone</p>
                      <p className="mt-2 text-sm font-semibold text-velmora-espresso">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id)}
                      className="rounded-full p-2 text-velmora-cocoa transition hover:bg-velmora-blush hover:text-velmora-espresso"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-taupe bg-velmora-ivory text-velmora-espresso">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-velmora-cocoa transition hover:text-velmora-gold"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-velmora-cocoa transition hover:text-velmora-gold"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-velmora-espresso">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-taupe/60 bg-velmora-ivory px-6 py-5 text-velmora-espresso">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.22em]">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-sm text-velmora-cocoa">Shipping and taxes calculated at checkout.</p>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-gold hover:text-velmora-espresso"
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
