import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#faf8f5] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e2db]">
          <h2 className="font-['Cormorant_Garamond'] text-xl uppercase tracking-wider">
            Your Bag ({items.length})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-[#c9a96e] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-[#d4c5b2] mb-4" />
              <p className="font-['Cormorant_Garamond'] text-xl mb-2">Your bag is empty</p>
              <p className="text-sm text-[#6b6560] mb-6">Discover pieces you'll love</p>
              <Link to="/shop" className="btn-accent" onClick={() => setIsOpen(false)}>
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="text-[#6b6560] text-[10px] uppercase tracking-wider">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm">{item.name}</h3>
                    <p className="text-xs text-[#6b6560] mt-1">{item.variant}</p>
                    <p className="text-sm mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-[#d4c5b2] flex items-center justify-center hover:border-[#1a1a1a] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-[#d4c5b2] flex items-center justify-center hover:border-[#1a1a1a] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-[#6b6560] hover:text-[#8b3a3a] transition-colors underline"
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
          <div className="border-t border-[#e8e2db] px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm uppercase tracking-wider">Subtotal</span>
              <span className="font-['Cormorant_Garamond'] text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#6b6560]">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
