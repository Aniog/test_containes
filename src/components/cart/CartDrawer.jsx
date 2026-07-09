import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl font-semibold text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-muted mt-1">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-border">
                  <div className="w-20 h-20 bg-muted-light flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-accent transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-accent transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-muted hover:text-charcoal transition-colors self-start"
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
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-lg font-serif font-semibold text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-accent text-white py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-accent-light transition-colors">
              Checkout
            </button>
            <p className="text-xs text-muted text-center mt-3">Free shipping on orders over $75</p>
          </div>
        )}
      </div>
    </>
  )
}
