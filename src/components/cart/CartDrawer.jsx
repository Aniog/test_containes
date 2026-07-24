import { useCart } from '@/context/CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, total, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-200">
          <h2 className="font-serif text-xl tracking-wide text-charcoal-900">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal-500 hover:text-charcoal-900 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-velmora-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-700 mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal-500 mb-6">Discover pieces you'll love</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-accent"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-velmora-200">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 px-6 py-5">
                  <div className="w-20 h-20 bg-velmora-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.shortName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-charcoal-900 truncate">
                      {item.shortName}
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal-900 mt-1">${item.price}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm text-charcoal-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-charcoal-400 hover:text-red-500 transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg text-charcoal-900">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal-500">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-sm text-charcoal-500 hover:text-charcoal-900 transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
