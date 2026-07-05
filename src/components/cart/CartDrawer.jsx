import React from 'react'
import { useCart } from './CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, closeCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-warm-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-charcoal/10">
          <h2 className="font-serif text-xl tracking-ultra-wide uppercase text-text-primary">
            Cart ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-1 text-text-secondary hover:text-text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-text-muted mb-4" />
              <p className="font-serif text-lg text-text-secondary">Your cart is empty</p>
              <p className="text-sm text-text-muted mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream rounded-sm flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide-product uppercase text-text-primary truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-text-primary mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-charcoal/20 text-text-secondary hover:border-muted-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-charcoal/20 text-text-secondary hover:border-muted-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-text-muted hover:text-text-primary underline transition-colors"
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
          <div className="border-t border-warm-charcoal/10 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-lg text-text-primary">${totalPrice}</span>
            </div>
            <p className="text-xs text-text-muted">Shipping calculated at checkout</p>
            <button className="w-full bg-muted-gold text-warm-black py-3 text-xs font-medium uppercase tracking-ultra-wide hover:bg-bright-gold transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
