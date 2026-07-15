import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-[70] shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300">
          <h2 className="font-serif text-xl tracking-wide text-slate-850">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-slate-850 hover:text-gold-600 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-cream-400 mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-slate-850 mb-2">Your cart is empty</p>
              <p className="text-sm text-slate-850/50 mb-6">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary text-[11px]"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-cream-300/50">
                  {/* Image */}
                  <div className="w-20 h-24 bg-cream-200 overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-xs mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-slate-850/50 capitalize mb-3">{item.variant} tone</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-cream-400">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-slate-850 hover:text-gold-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-sans font-medium text-slate-850">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-slate-850 hover:text-gold-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-sans font-medium text-slate-850">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-slate-850/40 hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={14} />
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
          <div className="border-t border-cream-300 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm uppercase tracking-wider text-slate-850/60">Subtotal</span>
              <span className="font-serif text-xl text-slate-850">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-slate-850/40 text-center">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-center">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs text-slate-850/50 hover:text-gold-600 transition-colors uppercase tracking-wider"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
