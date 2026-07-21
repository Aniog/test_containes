import React from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    setIsDrawerOpen,
    removeItem,
    updateQuantity,
    totalPrice,
  } = useCart()

  if (!isDrawerOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-lg tracking-wide text-velmora-base">
            YOUR BAG ({items.length})
          </h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-velmora-text hover:text-velmora-base transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
              <p className="font-serif text-lg text-velmora-text-light mb-2">
                Your bag is empty
              </p>
              <p className="text-sm text-velmora-text-light mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsDrawerOpen(false)}
                className="px-6 py-3 bg-velmora-base text-white text-xs tracking-wider uppercase hover:bg-velmora-gold transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div
                  key={`${item.productId}-${item.variant}-${index}`}
                  className="flex gap-4 pb-6 border-b border-velmora-border"
                >
                  <div className="w-20 h-24 bg-velmora-taupe-light flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide text-velmora-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-text-light mt-0.5">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-velmora-base mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.variant,
                            item.quantity - 1
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:border-velmora-base transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.variant,
                            item.quantity + 1
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:border-velmora-base transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() =>
                          removeItem(item.productId, item.variant)
                        }
                        className="ml-auto text-xs text-velmora-text-light underline hover:text-velmora-base transition-colors"
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
          <div className="px-6 py-5 border-t border-velmora-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-text-light">Subtotal</span>
              <span className="font-serif text-lg text-velmora-base">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-text-light">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-velmora-base text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-full py-3 text-xs tracking-wider uppercase text-velmora-text hover:text-velmora-base transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
