import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl font-medium">Your Cart</h2>
          <button onClick={closeCart} className="p-1 hover:opacity-70 transition-opacity text-charcoal">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-fg/40 mb-4" />
              <p className="text-muted-fg text-sm">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 text-accent text-sm font-medium hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-border last:border-0">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-muted flex-shrink-0 flex items-center justify-center">
                    <span className="text-muted-fg/40 text-xs text-center px-1">{item.name}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-medium uppercase tracking-product truncate text-charcoal">
                      {item.name}
                    </h4>
                    <p className="text-muted-fg text-xs mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-charcoal text-sm font-medium mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:bg-muted transition-colors text-charcoal"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium text-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-muted transition-colors text-charcoal"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-muted-fg text-xs hover:text-charcoal transition-colors"
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
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-fg">Subtotal</span>
              <span className="text-lg font-serif font-medium text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-muted-fg mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-charcoal text-cream text-sm font-medium tracking-wide hover:bg-charcoal/90 transition-colors">
              CHECKOUT
            </button>
            <button
              onClick={closeCart}
              className="w-full py-3 text-sm text-muted-fg hover:text-charcoal transition-colors mt-2"
            >
              Continue Shopping
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
