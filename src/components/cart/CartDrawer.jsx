import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">
            Your Bag ({itemCount})
          </h2>
          <button onClick={closeCart} className="p-1 text-stone-500 hover:text-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-stone-500 mb-6">Discover our collection of fine jewelry</p>
              <button onClick={closeCart} className="btn-secondary text-xs">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-cream-dark rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-gold text-2xl">✦</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm text-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-stone-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-stone-500 hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-sans w-6 text-center text-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-stone-500 hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-stone-400 hover:text-red-700 transition-colors underline-offset-2 hover:underline"
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
          <div className="border-t border-stone-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-stone-600">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-400">Shipping calculated at checkout</p>
            <button className="btn-primary w-full text-center">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs font-sans tracking-wider uppercase text-stone-500 hover:text-charcoal transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
