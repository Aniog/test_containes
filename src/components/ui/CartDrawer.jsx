import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-background z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="serif-heading text-lg sm:text-xl tracking-wider">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-primary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Link
                to="/shop"
                className="btn-outline text-xs sm:text-sm"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {cart.map((item) => (
                <div key={`${item.productId}-${item.variantId}`} className="flex gap-3 sm:gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs text-muted-foreground text-center px-2">
                      {item.image}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-xs sm:text-sm mb-1 truncate">{item.productName}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mb-2">{item.variantName}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                          className="p-1.5 hover:text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                        <span className="text-sm w-6 sm:w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                          className="p-1.5 hover:text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                      <p className="text-xs sm:text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId, item.variantId)}
                    className="p-1.5 hover:text-primary transition-colors self-start flex-shrink-0"
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
        {cart.length > 0 && (
          <div className="border-t border-border p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm tracking-wider uppercase">Subtotal</span>
              <span className="serif-heading text-lg sm:text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Shipping and taxes calculated at checkout
            </p>
            <button className="btn-primary w-full text-sm">
              Checkout
            </button>
            <button
              className="btn-outline w-full text-xs sm:text-sm"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
