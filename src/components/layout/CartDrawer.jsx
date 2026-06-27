import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border-dark mb-4" />
              <p className="text-text-muted text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-accent font-medium hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-border">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-accent-light rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-accent text-xs font-medium">IMG</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-medium uppercase tracking-product truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-border rounded-sm flex items-center justify-center hover:border-border-dark transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-border rounded-sm flex items-center justify-center hover:border-border-dark transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="self-start p-1 text-text-muted hover:text-text transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-muted">Subtotal</span>
              <span className="text-lg font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full py-3.5 bg-accent text-white text-sm font-medium uppercase tracking-product text-center rounded-sm hover:bg-accent-hover transition-colors">
              Checkout
            </button>
            <p className="text-xs text-text-muted text-center mt-3">
              Free shipping on orders over $75
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
