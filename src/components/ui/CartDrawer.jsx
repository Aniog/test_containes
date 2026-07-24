import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-warm-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-warm-white z-50 shadow-warm-lg flex flex-col transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream">
          <h2 className="font-serif text-lg tracking-heading uppercase text-warm-black">
            Your Cart
          </h2>
          <button onClick={closeCart} className="text-muted hover:text-warm-black transition-colors duration-300" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-light mb-4" />
              <p className="font-sans text-sm text-muted">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="mt-6 font-sans text-sm tracking-button uppercase text-gold hover:text-gold-dark border-b border-gold hover:border-gold-dark pb-0.5 transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Thumbnail placeholder */}
                  <div className="w-16 h-20 bg-cream flex-shrink-0 rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-cream/80 flex items-center justify-center">
                      <span className="font-sans text-xs text-muted">{item.product.name.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-product uppercase text-warm-black truncate">
                      {item.product.name}
                    </h3>
                    <p className="font-sans text-xs text-muted mt-0.5">
                      Tone: {item.tone}
                    </p>
                    <p className="font-sans text-sm text-warm-black mt-1 font-medium">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-cream text-muted hover:text-warm-black hover:border-gold flex items-center justify-center transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-warm-black w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-cream text-muted hover:text-warm-black hover:border-gold flex items-center justify-center transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-2 font-sans text-xs text-muted hover:text-warm-black underline transition-colors duration-200"
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
          <div className="px-6 py-4 border-t border-cream">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-muted uppercase tracking-button">Subtotal</span>
              <span className="font-serif text-lg text-warm-black">{formatPrice(totalPrice)}</span>
            </div>
            <button className="w-full bg-gold hover:bg-gold-dark text-warm-black font-sans text-sm tracking-button uppercase py-3 transition-colors duration-300">
              Checkout
            </button>
            <p className="mt-2 font-sans text-xs text-muted text-center">Shipping calculated at checkout</p>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
