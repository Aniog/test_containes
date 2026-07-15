import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E4DF]">
          <h2
            className="font-serif text-xl tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your Bag ({cart.length})
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#E8E4DF] mb-4" />
              <p className="text-[#6B6560] text-sm">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="mt-4 text-xs tracking-widest uppercase text-[#B8860B] hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  {/* Image placeholder */}
                  <div
                    className="w-20 h-24 bg-[#E8E4DF] flex-shrink-0"
                    data-strk-bg-id={`cart-thumb-${item.imageId}`}
                    data-strk-bg={`[${item.shortName?.toLowerCase?.() || 'gold jewelry'}]`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm tracking-wider uppercase text-[#1A1A1A] truncate"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.shortName || item.name}
                    </h3>
                    <p className="text-xs text-[#6B6560] mt-0.5">
                      {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E8E4DF]">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs text-[#1A1A1A]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-[#1A1A1A]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="self-start p-1 text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[#E8E4DF] px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B6560]">Subtotal</span>
              <span className="text-lg font-medium text-[#1A1A1A]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[#6B6560]">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-[#B8860B] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#996F0A] transition-colors">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-xs tracking-widest uppercase text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
