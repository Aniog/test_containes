import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-brand-cream shadow-elevated animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-linen">
          <h2 className="font-serif text-xl tracking-wide">Your Cart ({totalItems})</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 text-brand-taupe hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-linen mb-4" />
              <p className="font-serif text-lg text-brand-taupe mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-brand-warm">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-brand-linen/50 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-24 bg-brand-ivory flex-shrink-0 overflow-hidden">
                    <img
                      src={`https://placehold.co/200x267/FAF8F5/B8860B?text=${encodeURIComponent(item.name.split(' ')[0])}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-sm uppercase tracking-wider text-brand-charcoal">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-brand-warm mt-0.5">
                        {item.variant}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-brand-linen">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-brand-taupe hover:text-brand-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-brand-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-brand-taupe hover:text-brand-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price & remove */}
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm text-brand-gold font-medium">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-brand-warm hover:text-brand-charcoal text-xs underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-brand-linen bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-brand-taupe uppercase tracking-wider">
                Subtotal
              </span>
              <span className="font-serif text-xl text-brand-charcoal">
                ${totalPrice}
              </span>
            </div>
            <p className="font-sans text-xs text-brand-warm mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
