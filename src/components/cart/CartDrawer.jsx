import React from 'react'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-warm/50">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-serif text-lg text-velmora-muted">Your cart is empty</p>
                <p className="text-sm text-velmora-muted-light mt-2">
                  Discover our collection of demi-fine jewelry
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-warm/30 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wider truncate">{item.name}</h3>
                      <p className="text-xs text-velmora-muted mt-1 capitalize">{item.variant} tone</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeItem(index)}
                          className="ml-auto p-1 text-velmora-muted hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
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
            <div className="border-t border-velmora-warm/50 px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm tracking-wider uppercase">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted mb-4">Shipping & taxes calculated at checkout</p>
              <button className="w-full btn-primary">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-3 text-xs text-velmora-muted hover:text-velmora-base transition-colors underline"
              >
                Clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
