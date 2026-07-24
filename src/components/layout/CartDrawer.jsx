import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-espresso/45 transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Close cart"
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-2xl transition duration-500 sm:border-l sm:border-velmora-linen ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-linen px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs uppercase tracking-cta text-velmora-mist">Velmora Cart</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your Pieces ({itemCount})</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-linen p-2 text-velmora-espresso transition hover:border-velmora-champagne hover:text-velmora-bronze focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="mb-5 h-12 w-12 text-velmora-champagne" aria-hidden="true" />
            <h3 className="font-serif text-3xl text-velmora-espresso">Your cart is quietly waiting.</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-mist">
              Add an everyday gold piece or a gift-ready set to begin.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-7">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.tone}`} className="border border-velmora-linen bg-velmora-porcelain/60 p-4">
                  <div className="flex gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-velmora-linen/55 font-serif text-2xl text-velmora-bronze">
                      V
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-base uppercase leading-tight tracking-product text-velmora-espresso">
                            {item.product.name}
                          </h3>
                          <p className="mt-1 text-xs uppercase tracking-cta text-velmora-mist">{item.tone}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.product.id, item.tone)}
                          className="p-1 text-velmora-mist transition hover:text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-velmora-linen bg-velmora-ivory">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.tone, item.quantity - 1)}
                            className="p-2 text-velmora-espresso transition hover:bg-velmora-linen/45 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                          <span className="min-w-9 text-center text-sm font-semibold text-velmora-espresso">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.tone, item.quantity + 1)}
                            className="p-2 text-velmora-espresso transition hover:bg-velmora-linen/45 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                        <span className="font-serif text-xl text-velmora-espresso">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-velmora-linen bg-velmora-ivory px-5 py-5 sm:px-7">
          <div className="mb-4 flex items-center justify-between text-velmora-espresso">
            <span className="text-sm uppercase tracking-cta">Subtotal</span>
            <span className="font-serif text-3xl">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            className="w-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-cta text-velmora-espresso transition hover:bg-velmora-bronze hover:text-velmora-ivory disabled:cursor-not-allowed disabled:bg-velmora-linen disabled:text-velmora-mist"
          >
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-mist">
            Taxes and shipping calculated at checkout. Free worldwide shipping on every order.
          </p>
        </div>
      </aside>
    </div>
  )
}
