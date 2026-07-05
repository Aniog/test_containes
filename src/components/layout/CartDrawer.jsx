import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

export default function CartDrawer({ isOpen, items, onClose, onIncrease, onDecrease, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/55 backdrop-blur-sm transition duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-cocoa shadow-editorial transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-mist px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-antique">Velmora Bag</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-mist text-velmora-ink transition hover:border-velmora-champagne hover:bg-velmora-champagne"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-velmora-mist bg-velmora-cream text-velmora-antique">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-velmora-ink">Your bag is quiet for now.</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-cocoa/80">
              Add a luminous demi-fine piece and it will appear here, ready for gifting or self-purchase.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 border border-velmora-champagne bg-velmora-champagne px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-pearl"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              <div className="space-y-5">
                {items.map((item) => (
                  <article key={item.id} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-mist pb-5">
                    <div className="relative overflow-hidden bg-velmora-espresso velmora-image">
                      <img
                        alt={item.name}
                        className="aspect-square h-full w-full object-cover"
                        data-strk-img-id={item.imageId}
                        data-strk-img={`[cart-${item.id}-desc] [cart-${item.id}-title]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="260"
                        src={placeholder}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={`cart-${item.id}-title`} className="font-serif text-lg font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-ink">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-antique">{item.material}</p>
                          <span id={`cart-${item.id}-desc`} className="sr-only">{item.description}</span>

                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="text-velmora-cocoa/70 transition hover:text-velmora-ink"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center border border-velmora-mist bg-velmora-cream">
                          <button type="button" onClick={() => onDecrease(item.id)} className="p-2 text-velmora-ink" aria-label={`Decrease ${item.name}`}>
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-bold text-velmora-ink">{item.quantity}</span>
                          <button type="button" onClick={() => onIncrease(item)} className="p-2 text-velmora-ink" aria-label={`Increase ${item.name}`}>
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="font-serif text-xl font-semibold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-mist bg-velmora-cream px-5 py-6 sm:px-7">
              <div className="mb-4 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em] text-velmora-cocoa">
                <span>Subtotal · {itemCount} item{itemCount === 1 ? '' : 's'}</span>
                <span className="font-serif text-2xl normal-case tracking-normal text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-5 text-sm leading-6 text-velmora-cocoa/75">Shipping and taxes calculated at checkout. Free worldwide shipping is already included.</p>
              <button type="button" className="w-full border border-velmora-ink bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:border-velmora-champagne hover:bg-velmora-champagne hover:text-velmora-ink">
                Checkout Preview
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
