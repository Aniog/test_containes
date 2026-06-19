import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-label="Shopping cart" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-bg)] shadow-2xl animate-slide-up flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[var(--velmora-border)]">
          <h2 className="serif-heading text-lg sm:text-xl">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-[var(--velmora-gold)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 sm:p-8">
              <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--velmora-text-muted)] mb-4" />
              <p className="serif-heading text-lg text-[var(--velmora-text-secondary)] mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-[var(--velmora-text-muted)] mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                className="btn-primary text-xs sm:text-sm"
                onClick={() => setIsCartOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-3 sm:gap-4">
                  <div className="w-16 sm:w-20 h-20 sm:h-24 bg-[var(--velmora-bg-secondary)] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-xs sm:text-sm text-[var(--velmora-text)]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mt-1 capitalize">
                      {item.variant} tone
                    </p>
                    <div className="flex items-center justify-between mt-2 sm:mt-3">
                      <div className="flex items-center border border-[var(--velmora-border)]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center hover:text-[var(--velmora-gold)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 sm:px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center hover:text-[var(--velmora-gold)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 min-w-[36px] min-h-[36px] flex items-center justify-center self-start text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[var(--velmora-border)] p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--velmora-text-secondary)]">Subtotal</span>
              <span className="serif-heading text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)]">
              Shipping and taxes calculated at checkout
            </p>
            <Link to="/checkout" className="btn-gold w-full min-h-[48px] text-xs sm:text-sm block text-center">
              Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-outline w-full min-h-[48px] text-xs sm:text-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
