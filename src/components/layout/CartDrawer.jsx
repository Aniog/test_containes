import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    itemCount,
  } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-40 transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray">
          <h2 className="text-sm font-sans font-medium uppercase tracking-ui text-espresso">
            Your Cart ({itemCount})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 text-espresso hover:text-gold transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} strokeWidth={1} className="text-taupe mb-4" />
            <p className="text-lg font-serif text-espresso">Your cart is empty</p>
            <p className="mt-1 text-sm text-taupe">
              Discover something beautiful to treasure.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 px-8 py-3 bg-espresso text-cream uppercase text-xs tracking-ui font-medium hover:bg-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-warm-gray flex-shrink-0 flex items-center justify-center text-taupe text-xs">
                    {item.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-sans font-medium uppercase tracking-widest-plus text-espresso truncate">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-taupe">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        aria-label={`Remove ${item.name}`}
                        className="text-taupe hover:text-espresso transition-colors"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-warm-gray bg-ivory">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="px-2 py-1.5 text-espresso hover:bg-warm-gray transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-xs font-medium text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="px-2 py-1.5 text-espresso hover:bg-warm-gray transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-warm-gray px-6 py-6 space-y-4">
              <div className="flex items-center justify-between text-espresso">
                <span className="text-sm font-sans uppercase tracking-ui">
                  Subtotal
                </span>
                <span className="text-base font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full py-4 bg-espresso text-cream uppercase text-xs tracking-ui font-medium hover:bg-charcoal transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full py-3 border border-espresso text-espresso uppercase text-xs tracking-ui font-medium hover:bg-espresso hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
