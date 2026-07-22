import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-light-gray">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-light-gray mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-warm-gray">Discover our collection of fine jewelry</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-light-gray/50 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 flex items-center justify-center">
                    <span className="text-2xl">✦</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-gray capitalize mt-1">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-light-gray flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm text-charcoal w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-light-gray flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-warm-gray hover:text-burgundy transition-colors underline"
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
          <div className="border-t border-light-gray px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-gray">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-primary text-center">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-xs text-warm-gray hover:text-charcoal transition-colors text-center underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
