import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
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
    count,
  } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-charcoal-900/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream-100 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-charcoal-900/8 px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide">Your Cart ({count})</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-charcoal-600 transition-colors hover:text-charcoal-900"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="mb-4 text-charcoal-300" />
            <p className="font-serif text-lg">Your cart is empty</p>
            <p className="mt-1 text-sm text-charcoal-500">
              Discover pieces crafted to be treasured.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-cream-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-sm uppercase tracking-widest">
                          {item.product.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-charcoal-500">
                          {item.variant}
                        </p>
                        <p className="mt-1 text-sm font-medium">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-charcoal-900/10">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant, item.quantity - 1)
                            }
                            className="p-1.5 hover:bg-cream-200"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant, item.quantity + 1)
                            }
                            className="p-1.5 hover:bg-cream-200"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="text-charcoal-400 transition-colors hover:text-red-600"
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

            <div className="border-t border-charcoal-900/8 px-6 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-charcoal-600">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-charcoal-500">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-5 w-full bg-charcoal-900 py-3.5 text-sm font-medium uppercase tracking-widest text-cream-100 transition-colors hover:bg-charcoal-800"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full border border-charcoal-900/20 py-3 text-xs uppercase tracking-widest transition-colors hover:bg-cream-200"
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
