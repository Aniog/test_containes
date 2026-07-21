import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-noir/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col bg-velmora-pearl text-velmora-espresso shadow-soft transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart drawer"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-taupe">Velmora Cart</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your keepsakes</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-line p-2 text-velmora-espresso transition hover:border-velmora-gold hover:bg-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="luxury-scrollbar flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {items.length === 0 ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-velmora-gold" />
              <p className="mt-5 font-serif text-3xl text-velmora-espresso">Your cart is quiet.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-taupe">
                Add a luminous piece from the collection and it will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.cartKey} className="border-b border-velmora-line pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="product-name text-base text-velmora-espresso">{item.name}</p>
                      <p className="mt-1 text-sm text-velmora-taupe">${item.price} · {item.tone}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.cartKey)}
                      className="rounded-full p-2 text-velmora-taupe transition hover:bg-velmora-blush hover:text-velmora-espresso"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-ivory text-velmora-espresso">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartKey, item.quantity - 1)}
                        className="p-2 transition hover:text-velmora-bronze"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartKey, item.quantity + 1)}
                        className="p-2 transition hover:text-velmora-bronze"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-semibold text-velmora-espresso">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line bg-velmora-ivory px-5 py-5 sm:px-7">
          <div className="flex items-center justify-between text-base font-semibold text-velmora-espresso">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-taupe">
            Checkout integration can be connected later. Shipping and returns remain complimentary.
          </p>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-noir px-6 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ivory transition hover:-translate-y-0.5 hover:bg-velmora-espresso disabled:cursor-not-allowed disabled:opacity-50"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
