import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="cart-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-cream z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div>
              <h2 className="font-serif text-xl">Shopping Bag</h2>
              <p className="text-sm text-muted">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-ghost p-2"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-muted mb-4">Your bag is empty</p>
                <Link
                  to="/collection"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4 pb-5 border-b border-border-light last:border-0">
                    {/* Image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-warm-100 rounded-sm overflow-hidden">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="product-name text-xs">{item.name}</h3>
                          <p className="text-sm text-muted mt-0.5">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted hover:text-error transition-colors p-1 -mr-1 -mt-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-border rounded-full hover:bg-warm-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-border rounded-full hover:bg-warm-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
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
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-sm text-muted hover:text-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}