import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ open, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-velmora-lg transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/70 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-ui text-velmora-bronze">Velmora Bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-sand bg-transparent p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-bronze"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
              <p className="font-serif text-3xl">Your cart is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-bronze">
                Add a piece from the collection and it will appear here for a quick review.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-[92px_1fr] gap-4 border-b border-velmora-sand/60 pb-5">
                  <div
                    className="aspect-[4/5] overflow-hidden bg-velmora-blush/40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.imageAlt || item.image})` }}
                    role="img"
                    aria-label={`${item.name} jewelry product view`}
                  />
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-${item.id}-title`} className="font-serif text-base uppercase tracking-product text-velmora-ink">
                          {item.name}
                        </h3>
                        <p id={`cart-${item.id}-desc`} className="sr-only">{item.shortDescription}</p>
                        <p id={`cart-${item.id}-material`} className="sr-only">{item.material}</p>
                        <p className="mt-1 text-sm text-velmora-bronze">${item.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        className="rounded-full bg-transparent p-2 text-velmora-bronze transition hover:text-velmora-ink"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-ink">
                      <button
                        type="button"
                        className="bg-transparent px-3 py-2 text-velmora-ink hover:text-velmora-bronze"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        className="bg-transparent px-3 py-2 text-velmora-ink hover:text-velmora-bronze"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand/70 p-5 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-ui text-velmora-bronze">
            <span>Subtotal · {itemCount} item{itemCount === 1 ? '' : 's'}</span>
            <span className="font-semibold text-velmora-ink">${subtotal}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-ui text-velmora-ink transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
          >
            Continue to Checkout
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-bronze">
            Secure checkout placeholder. Real checkout can be connected next.
          </p>
        </div>
      </aside>
    </>
  )
}
