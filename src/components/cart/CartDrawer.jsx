import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice, products } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'

function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const fallbackImage = getStrkImageUrl(products[0].imageIds.primary)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-[-28px_0_80px_rgba(33,23,19,0.22)] transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-cocoa/10 px-5 py-5 sm:px-7">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-velmora-gold">Velmora</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-cocoa/15 bg-transparent p-3 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-velmora-cocoa/20 bg-velmora-champagne/45 px-8 text-center text-velmora-espresso">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
              <h3 className="font-serif text-3xl">Your jewelry box is waiting.</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-cocoa/85">
                Add your favorite Velmora pieces and they will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-cocoa/10 pb-5">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-velmora-champagne">
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      src={item.imageSrc || fallbackImage}
                    />
                  </div>
                  <div className="min-w-0 text-velmora-espresso">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-title-${item.id}-${item.tone.toLowerCase()}`} className="font-serif text-base uppercase tracking-[0.16em] text-velmora-espresso">
                          {item.name}
                        </h3>
                        <p id={`cart-desc-${item.id}-${item.tone.toLowerCase()}`} className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-cocoa/70">
                          {item.tone} tone · {item.tagline}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id, item.tone)}
                        className="rounded-full bg-transparent p-2 text-velmora-cocoa/70 transition hover:text-velmora-gold"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-cocoa/15 bg-velmora-ivory text-velmora-espresso">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="bg-transparent p-2 text-velmora-espresso transition hover:text-velmora-gold"
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="bg-transparent p-2 text-velmora-espresso transition hover:text-velmora-gold"
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-serif text-lg text-velmora-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-cocoa/10 bg-velmora-porcelain px-5 py-5 text-velmora-espresso sm:px-7">
          <div className="mb-4 flex items-center justify-between text-sm text-velmora-cocoa">
            <span>{itemCount} item{itemCount === 1 ? '' : 's'}</span>
            <span>Free worldwide shipping</span>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-velmora-cocoa">Subtotal</span>
            <span className="font-serif text-3xl text-velmora-espresso">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-softgold disabled:cursor-not-allowed disabled:opacity-55"
            disabled={items.length === 0}
          >
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-cocoa/75">
            Secure checkout can be connected when you are ready to launch.
          </p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
