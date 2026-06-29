import React from 'react'
import { useCart } from './CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, closeCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-charcoal/40 z-40 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">
            Shopping Bag ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-muted hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border-dark mb-4" />
              <p className="font-serif text-lg text-muted">Your bag is empty</p>
              <p className="text-sm text-muted mt-1">Discover something you love</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream-dark flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-widest text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border text-muted hover:text-charcoal hover:border-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border text-muted hover:text-charcoal hover:border-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-muted hover:text-charcoal underline transition-colors"
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
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-muted">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-cream py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-gold-dark transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full border border-charcoal text-charcoal py-3 text-xs uppercase tracking-widest font-semibold hover:bg-charcoal hover:text-cream transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
