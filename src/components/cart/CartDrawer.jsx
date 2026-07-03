import React from 'react'
import { useCart } from './CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, closeCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-ivory z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-brown/15">
          <h2 className="font-serif text-xl text-warm-black">Shopping Bag ({totalItems})</h2>
          <button onClick={closeCart} className="p-1 hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-warm-tan">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="text-sm mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream rounded flex-shrink-0 overflow-hidden">
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
                    <h3 className="text-product-name text-xs text-warm-black">{item.name}</h3>
                    <p className="text-xs text-warm-tan mt-1">{item.variant}</p>
                    <p className="text-sm font-medium text-warm-black mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-brown/30 rounded text-warm-tan hover:border-gold hover:text-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-brown/30 rounded text-warm-tan hover:border-gold hover:text-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-warm-tan hover:text-warm-black transition-colors underline"
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
          <div className="border-t border-warm-brown/15 px-6 py-5">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-warm-tan">Subtotal</span>
              <span className="text-sm font-medium text-warm-black">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-tan mb-4">Shipping calculated at checkout</p>
            <button className="btn-primary w-full text-center">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="btn-secondary w-full text-center mt-3"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
