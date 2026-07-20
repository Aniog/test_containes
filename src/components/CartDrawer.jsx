import { Minus, Plus, X, ShoppingBag, Trash2, Gem } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory shadow-2xl transition-transform duration-500 ease-lux ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-stone px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-velmora-ink" />
            <h2 className="font-serif text-xl font-medium text-velmora-ink">Your Cart</h2>
            <span className="rounded-full bg-velmora-stone px-2.5 py-0.5 text-xs font-medium text-velmora-ink">
              {count}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full p-2 text-velmora-warmgray transition hover:bg-velmora-stone hover:text-velmora-ink"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="mb-4 text-velmora-sand" />
            <p className="font-serif text-lg text-velmora-ink">Your cart is empty</p>
            <p className="mt-2 text-sm text-velmora-warmgray">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 rounded-full bg-velmora-ink px-8 py-3 text-xs font-medium uppercase tracking-widest text-velmora-ivory transition hover:bg-velmora-charcoal"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                    <div className="flex aspect-square w-20 flex-shrink-0 items-center justify-center bg-velmora-stone">
                      <Gem size={24} className="text-velmora-taupe" aria-hidden="true" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4
                          id={`cart-title-${item.productId}`}
                          className="font-serif text-sm font-medium uppercase tracking-widest text-velmora-ink"
                        >
                          {item.name}
                        </h4>
                        <p className="mt-0.5 text-xs capitalize text-velmora-warmgray">
                          {item.variantId} Tone
                        </p>
                        <p className="mt-1 text-sm font-medium text-velmora-ink">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-stone">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.variantId, item.quantity - 1)
                            }
                            className="p-2 text-velmora-warmgray transition hover:bg-velmora-stone hover:text-velmora-ink"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm text-velmora-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.variantId, item.quantity + 1)
                            }
                            className="p-2 text-velmora-warmgray transition hover:bg-velmora-stone hover:text-velmora-ink"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId, item.variantId)}
                          className="p-2 text-velmora-taupe transition hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-velmora-stone px-6 py-6">
              <div className="flex items-center justify-between pb-4">
                <span className="text-sm text-velmora-warmgray">Subtotal</span>
                <span className="font-serif text-xl font-medium text-velmora-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-5 text-xs text-velmora-warmgray">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full rounded-full bg-velmora-ink py-4 text-xs font-medium uppercase tracking-widest text-velmora-ivory transition hover:bg-velmora-charcoal"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full py-3 text-center text-xs font-medium uppercase tracking-widest text-velmora-ink underline-offset-4 transition hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
