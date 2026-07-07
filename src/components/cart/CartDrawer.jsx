import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

const formatPrice = (value) => `$${value.toFixed(0)}`

export default function CartDrawer({ cartItems, open, onClose, onRemove, onQuantityChange }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-soft transition-transform duration-500 sm:w-[30rem] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Your cart</p>
            <h2 className="mt-1 font-serifDisplay text-3xl font-semibold text-velmora-espresso">Velmora edit</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-linen p-3 text-velmora-espresso transition hover:border-velmora-bronze hover:text-velmora-bronze"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-velmora-linen bg-velmora-mist p-8 text-center text-velmora-cocoa">
              <ShoppingBag className="h-10 w-10 text-velmora-bronze" />
              <p className="mt-5 font-serifDisplay text-3xl text-velmora-espresso">Your jewelry box is empty.</p>
              <p className="mt-3 text-sm leading-6">Add a favorite piece and we’ll keep it here for checkout.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <article key={`${item.id}-${item.tone}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-linen/80 pb-5">
                  <div className="overflow-hidden rounded-2xl bg-velmora-cream">
                    <img
                      alt={item.name}
                      className="h-24 w-full object-cover"
                      data-strk-img-id={`cart-${item.id}`}
                      data-strk-img={`[cart-title-${item.id}] [cart-tone-${item.id}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="min-w-0 text-velmora-espresso">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-title-${item.id}`} className="font-serifDisplay text-lg font-semibold uppercase tracking-[0.18em] text-velmora-espresso">
                          {item.name}
                        </h3>
                        <p id={`cart-tone-${item.id}`} className="mt-1 text-xs uppercase tracking-[0.2em] text-velmora-cocoa">
                          {item.tone} tone
                        </p>
                      </div>
                      <button
                        type="button"
                        className="rounded-full p-2 text-velmora-cocoa transition hover:bg-velmora-cream hover:text-velmora-bronze"
                        onClick={() => onRemove(item.id, item.tone)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-mist text-velmora-espresso">
                        <button
                          type="button"
                          className="p-2 transition hover:text-velmora-bronze"
                          onClick={() => onQuantityChange(item.id, item.tone, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          className="p-2 transition hover:text-velmora-bronze"
                          onClick={() => onQuantityChange(item.id, item.tone, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-velmora-espresso">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-linen bg-velmora-mist px-6 py-6 text-velmora-espresso">
          <div className="flex items-center justify-between text-base font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-sm text-velmora-cocoa">Shipping and returns are complimentary. Checkout integration can be connected next.</p>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-mist transition hover:bg-velmora-bronze"
          >
            Continue to checkout
          </button>
        </div>
      </aside>
    </>
  )
}
