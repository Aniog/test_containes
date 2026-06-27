import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-espresso/40"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm">
            <h2 className="font-serif text-lg tracking-[0.12em] uppercase text-espresso">
              Your Cart ({itemCount})
            </h2>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 text-espresso hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="w-10 h-10 text-sand mb-4" />
              <p className="font-serif text-lg text-espresso mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-stone mb-6">
                Discover something beautiful to treasure.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="bg-gold text-cream px-8 py-3 uppercase tracking-[0.14em] text-xs font-semibold hover:bg-gold-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.tone}`}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-taupe flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-sm tracking-[0.12em] uppercase text-espresso">
                            {item.name}
                          </p>
                          <p className="text-xs text-stone mt-1 capitalize">
                            Tone: {item.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-sand hover:text-espresso transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warm">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.tone, item.quantity - 1)
                            }
                            className="p-1.5 text-espresso hover:bg-taupe transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm text-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.tone, item.quantity + 1)
                            }
                            className="p-1.5 text-espresso hover:bg-taupe transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-espresso">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-warm px-6 py-5 space-y-4">
                <div className="flex items-center justify-between text-espresso">
                  <span className="text-sm uppercase tracking-[0.12em]">
                    Subtotal
                  </span>
                  <span className="font-serif text-lg">${subtotal}</span>
                </div>
                <p className="text-xs text-stone">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  type="button"
                  className="w-full bg-gold text-cream py-3.5 uppercase tracking-[0.14em] text-xs font-semibold hover:bg-gold-dark transition-colors"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full border border-espresso text-espresso py-3.5 uppercase tracking-[0.14em] text-xs font-semibold hover:bg-espresso hover:text-cream transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
