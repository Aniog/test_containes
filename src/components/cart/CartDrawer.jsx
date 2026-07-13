import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-muted mt-2">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-5 border-b border-border">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-muted font-sans">{item.variant}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium text-charcoal uppercase tracking-product truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1 text-charcoal hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium text-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1 text-charcoal hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-muted hover:text-gold underline transition-colors"
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
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-white text-sm font-medium uppercase tracking-wider hover:bg-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
