import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn, formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, removeItem, updateQuantity } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 w-full max-w-md h-full bg-velmora-cream shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-ivory">
          <h2 className="font-serif text-xl tracking-wider">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-slate hover:text-velmora-black transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-warm-gray mb-4" />
              <p className="font-serif text-lg text-velmora-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-slate mb-6">Discover our curated collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-6 py-3 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-widest-xl uppercase hover:bg-velmora-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-velmora-ivory last:border-0"
                >
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-velmora-linen rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-lg text-velmora-gold/40 tracking-wider">V</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wider text-velmora-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-slate mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-semibold text-velmora-black mt-1">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-ivory rounded hover:border-velmora-gold transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-sans font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-ivory rounded hover:border-velmora-gold transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs font-sans text-velmora-slate hover:text-red-500 transition-colors underline"
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
          <div className="px-6 py-5 border-t border-velmora-ivory bg-velmora-linen/50">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-velmora-slate">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-velmora-black">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-velmora-silver mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-widest-xl uppercase hover:bg-velmora-gold-dark transition-colors">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center mt-3 text-xs font-sans text-velmora-slate hover:text-velmora-gold transition-colors underline"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
