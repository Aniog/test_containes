import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { getStrkImageSrc } from '../../lib/strk-image'

const getCartImageSrc = (product) => getStrkImageSrc(`product-${product.id}-primary-img-velmora`)

export default function CartDrawer({
  isOpen,
  items,
  subtotal,
  onClose,
  onRemove,
  onUpdateQuantity,
}) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-espresso shadow-editorial transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-umber">Velmora cart</p>
            <h2 className="mt-1 font-serif text-3xl text-velmora-espresso">Your Selection</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-velmora-espresso transition hover:bg-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {items.length === 0 ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center text-velmora-espresso">
              <div className="mb-5 rounded-full border border-velmora-champagne/40 p-5 text-velmora-champagne">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl">Your cart is quietly waiting.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-umber">
                Add a demi-fine piece and we will keep it here while you continue browsing.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => (
                <article key={item.key} className="grid grid-cols-[96px_1fr] gap-4 border-b border-velmora-mist pb-5">
                  <div className="aspect-square overflow-hidden bg-velmora-mist">
                    <img
                      alt={item.product.name}
                      src={getCartImageSrc(item.product)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 text-velmora-espresso">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-base uppercase tracking-[0.18em] text-velmora-espresso">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-umber">
                          {item.tone} tone · ${item.product.price}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.key)}
                        className="rounded-full p-1.5 text-velmora-umber transition hover:bg-velmora-mist hover:text-velmora-oxblood focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-mist bg-velmora-cream text-velmora-espresso">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.key, item.quantity - 1)}
                          className="p-2 transition hover:bg-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-9 text-center text-sm font-bold text-velmora-espresso">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.key, item.quantity + 1)}
                          className="p-2 transition hover:bg-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-bold text-velmora-espresso">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist bg-velmora-cream px-5 py-5 text-velmora-espresso sm:px-7">
          <div className="flex items-center justify-between font-bold text-velmora-espresso">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-umber">
            Taxes and checkout are ready for future integration. Free worldwide shipping is included.
          </p>
          <button
            type="button"
            className="mt-5 w-full bg-velmora-oxblood px-5 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
