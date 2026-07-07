import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-muted-light">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
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
              <ShoppingBag className="w-12 h-12 text-muted-light mb-4" />
              <p className="text-muted text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-accent text-sm uppercase tracking-widest font-medium hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-muted-light last:border-0">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-muted-light flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-muted uppercase tracking-wider">Image</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm text-charcoal uppercase tracking-product truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-muted-light flex items-center justify-center text-charcoal hover:border-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-muted-light flex items-center justify-center text-charcoal hover:border-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-muted hover:text-accent transition-colors uppercase tracking-wider"
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
          <div className="px-6 py-5 border-t border-muted-light">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted uppercase tracking-wider">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-accent text-white py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-accent-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
