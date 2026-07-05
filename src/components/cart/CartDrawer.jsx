import React from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, cartTotal, cartCount } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-[#f8f6f3] shadow-2xl transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-velvet-200">
            <div>
              <h2 className="font-serif text-xl text-velvet-900">Your Cart</h2>
              <p className="text-velvet-600 text-xs mt-1">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
            </div>
            <button
              onClick={onClose}
              className="text-velvet-600 hover:text-velvet-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
                <p className="text-velvet-600 font-serif text-lg">Your cart is empty</p>
                <p className="text-velvet-500 text-sm mt-2">Add some pieces to get started.</p>
                <button
                  onClick={onClose}
                  className="mt-6 text-xs uppercase tracking-[0.12em] text-gold hover:text-gold-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velvet-200/50 last:border-0">
                    <div className="w-20 h-24 flex-shrink-0 bg-velvet-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs uppercase tracking-[0.15em] text-velvet-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-velvet-500 text-xs mt-1">{item.variant}</p>
                      <p className="text-gold text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velvet-300">
                          <button
                            className="px-2 py-1 text-velvet-600 hover:text-velvet-900 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-xs text-velvet-900 min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 text-velvet-600 hover:text-velvet-900 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-velvet-400 hover:text-red-500 text-xs uppercase tracking-wider transition-colors ml-auto"
                          onClick={() => removeItem(item.id, item.variant)}
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
          {cart.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-velvet-900 text-sm uppercase tracking-wider">Subtotal</span>
                <span className="text-velvet-900 font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-velvet-500 text-xs">Free shipping on all orders</p>
              <button className="w-full bg-velvet-900 text-white py-4 text-xs uppercase tracking-[0.15em] hover:bg-gold transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-velvet-600 text-xs uppercase tracking-[0.12em] hover:text-velvet-900 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}