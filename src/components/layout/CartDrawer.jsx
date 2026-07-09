import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isDrawerOpen, setIsDrawerOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isDrawerOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 animate-fade-in"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream animate-slide-in-right shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-warm-dark">
            <h2 className="font-serif text-xl tracking-wider text-velmora-base">YOUR BAG</h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 hover:bg-velmora-warm rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} className="text-velmora-base" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-velmora-muted mb-4" />
                <p className="font-serif text-lg text-velmora-base mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-muted mb-6">Discover pieces you'll love</p>
                <Link
                  to="/shop"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-6 py-3 bg-velmora-base text-velmora-cream text-sm tracking-widest hover:bg-velmora-charcoal transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-warm flex-shrink-0 overflow-hidden">
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider text-velmora-base">{item.name}</h3>
                      <p className="text-xs text-velmora-muted mt-1">{item.variant}</p>
                      <p className="text-sm text-velmora-base mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-warm-dark hover:border-velmora-base transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-warm-dark hover:border-velmora-base transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.productId, item.variant)}
                          className="ml-auto text-xs text-velmora-muted hover:text-velmora-base underline"
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
            <div className="border-t border-velmora-warm-dark px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm tracking-wider text-velmora-base">SUBTOTAL</span>
                <span className="font-serif text-lg text-velmora-base">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted mb-4">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-4 bg-velmora-base text-velmora-cream text-sm tracking-widest hover:bg-velmora-charcoal transition-colors">
                CHECKOUT
              </button>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-3 mt-2 text-sm tracking-widest text-velmora-base underline hover:text-velmora-gold transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
