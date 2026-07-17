import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen, setDrawer, removeItem, updateQuantity, subtotal, totalItems } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-brand-base/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={() => setDrawer(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-surface z-50 animate-slide-in-right shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-brand-gold-light/20">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-gold" />
            <h2 className="font-serif text-2xl text-brand-base">
              Your Bag ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setDrawer(false)}
            className="p-2 text-brand-muted hover:text-brand-base transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="w-16 h-16 text-brand-muted-light mb-4" />
            <p className="font-serif text-xl text-brand-base mb-2">Your bag is empty</p>
            <p className="text-brand-muted text-sm mb-6">
              Discover our collection and add something beautiful.
            </p>
            <button onClick={() => setDrawer(false)} className="btn-outline">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <img
                    src={item.product.images[0].src}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs tracking-widest uppercase text-brand-base mb-1 truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-brand-muted mb-2">
                      {item.product.variants.find((v) => v.value === item.variant)?.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-brand-gold-light/30">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 hover:bg-brand-cream transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 hover:bg-brand-cream transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">
                          ${(item.product.price * item.quantity).toFixed(0)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-brand-muted-light hover:text-brand-base transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-gold-light/20 p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-brand-muted">Subtotal</span>
                <span className="font-medium tabular-nums">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-brand-muted">Shipping & taxes calculated at checkout</p>
              <Link
                to="/shop"
                onClick={() => setDrawer(false)}
                className="btn-primary w-full"
              >
                Checkout
              </Link>
              <button
                onClick={() => setDrawer(false)}
                className="w-full text-center text-sm text-brand-gold hover:text-brand-gold-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
