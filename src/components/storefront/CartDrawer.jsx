import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ cartItems, isOpen, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart overlay"
        className={`absolute inset-0 bg-velmora-ink/45 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-editorial transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-champagne/25 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-brass">Velmora</p>
            <h2 className="font-serif text-2xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-champagne/35 p-2 text-velmora-ink transition hover:bg-velmora-linen"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <div className="mb-5 rounded-full border border-velmora-champagne/30 bg-velmora-linen p-5">
                <ShoppingBag className="h-8 w-8 text-velmora-brass" />
              </div>
              <h3 className="font-serif text-2xl">Your jewelry box is empty</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-bark/80">
                Add a golden keepsake and it will appear here, ready for checkout.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="border-b border-velmora-champagne/20 pb-5">
                  <div className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-linen">
                      <img
                        alt={item.name}
                        className="h-full w-full object-cover"
                        data-strk-img-id={`cart-${item.id}-${item.tone}`}
                        data-strk-img={`[cart-title-${item.id}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="240"
                        src={'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 id={`cart-title-${item.id}`} className="font-serif text-sm uppercase tracking-[0.18em] text-velmora-ink">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-bark/70">{item.tone} tone</p>
                      <p className="mt-3 font-semibold text-velmora-ink">${item.price}</p>
                    </div>
                    <button
                      type="button"
                      className="self-start rounded-full p-2 text-velmora-bark/70 transition hover:bg-velmora-linen hover:text-velmora-ink"
                      onClick={() => onRemove(item.id, item.tone)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-champagne/35 bg-velmora-pearl text-velmora-ink">
                      <button
                        type="button"
                        className="p-2 transition hover:text-velmora-brass"
                        onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        className="p-2 transition hover:text-velmora-brass"
                        onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-semibold text-velmora-ink">${item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-champagne/25 p-5">
          <div className="mb-4 flex items-center justify-between text-velmora-ink">
            <span className="text-sm uppercase tracking-[0.18em]">Subtotal</span>
            <span className="font-serif text-2xl">${subtotal}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-brass hover:text-velmora-pearl disabled:cursor-not-allowed disabled:opacity-60"
            disabled={cartItems.length === 0}
          >
            Checkout Later
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-bark/70">
            Checkout integration can be connected when your catalog is ready.
          </p>
        </div>
      </aside>
    </div>
  )
}
