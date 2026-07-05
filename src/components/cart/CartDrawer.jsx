import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/lib/CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-50 cart-overlay-enter"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col cart-drawer-enter shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-300">
          <h2 className="font-serif text-lg tracking-wide text-warm-900">Your Bag</h2>
          <button onClick={closeCart} className="p-1 text-warm-600 hover:text-warm-900 transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-warm-600 text-sm">Your bag is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 text-xs tracking-btn uppercase font-medium text-gold hover:text-gold-hover transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-warm-200 rounded flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-product uppercase text-warm-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-600 mt-0.5">
                      {item.tone === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                    </p>
                    <p className="text-sm font-medium text-warm-900 mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-warm-300 rounded flex items-center justify-center text-warm-700 hover:border-warm-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-warm-900 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-warm-300 rounded flex items-center justify-center text-warm-700 hover:border-warm-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-warm-600 hover:text-warm-900 underline transition-colors"
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
          <div className="border-t border-warm-300 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-warm-700">Subtotal</span>
              <span className="text-lg font-serif text-warm-900">${totalPrice}</span>
            </div>
            <p className="text-xs text-warm-600 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-hover text-white text-xs tracking-btn uppercase font-medium py-3.5 rounded transition-colors duration-200">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
