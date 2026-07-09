import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-drawer animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-base" strokeWidth={1.5} />
              <h2 className="font-serif text-xl text-base">
                Your Cart
                {totalItems > 0 && (
                  <span className="text-sm text-muted ml-2">({totalItems})</span>
                )}
              </h2>
            </div>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="p-2 text-muted hover:text-base transition-colors"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-border mb-4" strokeWidth={1} />
                <p className="font-serif text-lg text-base mb-2">Your cart is empty</p>
                <p className="text-sm text-muted mb-6">
                  Discover our collection of fine jewelry
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-flex items-center justify-center px-8 py-3 bg-base text-cream text-xs font-medium tracking-widest-xl uppercase hover:bg-base/90 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.key} className="flex gap-4 py-4 border-b border-border/50 last:border-0">
                    {/* Product image placeholder */}
                    <div className="w-20 h-24 bg-cream-dark rounded overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                        <span className="text-gold/40 text-xs font-serif">V</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm font-medium text-base tracking-wider uppercase truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-muted mt-1 capitalize">
                        {item.variant} tone
                      </p>
                      <p className="text-sm font-medium text-base mt-2">
                        {formatPrice(item.product.price)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="p-1.5 text-muted hover:text-base transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="p-1.5 text-muted hover:text-base transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-xs text-muted hover:text-rose-dark underline underline-offset-2 transition-colors"
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
            <div className="px-6 py-5 border-t border-border bg-cream-dark/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="font-serif text-lg font-medium text-base">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <p className="text-xs text-muted mb-4">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full py-3.5 bg-base text-cream text-xs font-medium tracking-widest-xl uppercase hover:bg-base/90 transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-2.5 text-xs text-muted hover:text-base transition-colors mt-2 tracking-wider uppercase"
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
