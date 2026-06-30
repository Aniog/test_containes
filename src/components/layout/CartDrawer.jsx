import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import Button from '@/components/ui/Button'

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso-900/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-cream-50 z-50 shadow-2xl animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cream-300">
          <h2 className="font-serif text-xl text-espresso-800">Your Bag ({cartCount})</h2>
          <button
            onClick={onClose}
            className="p-2 text-espresso-800/60 hover:text-espresso-800 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-cream-300 mb-4" strokeWidth={1} />
              <p className="text-espresso-800/60 mb-6">Your bag is empty</p>
              <Button variant="secondary" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-cream-200 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-product-name text-xs text-espresso-800 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-espresso-800/60 mb-2 capitalize">
                      {item.variant} · ${item.price}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-cream-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 hover:bg-cream-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 hover:bg-cream-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-espresso-800/50 hover:text-red-600 transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-espresso-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-cream-300 p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-espresso-800/70">Subtotal</span>
              <span className="font-medium text-espresso-800">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-espresso-800/50">Shipping calculated at checkout</p>
            <Button fullWidth size="lg" className="mt-4">
              Checkout
            </Button>
            <Link
              to="/shop"
              onClick={onClose}
              className="block text-center text-sm text-espresso-800/70 hover:text-gold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
