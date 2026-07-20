import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const innerRef = useRef(null)

  // Scan drawer images whenever items or open state change.
  useEffect(() => {
    if (!isOpen) return
    const frameId = window.requestAnimationFrame(() => {
      if (innerRef.current) {
        ImageHelper.loadImages(strkImgConfig, innerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  if (!isOpen) return null

  const freeShippingThreshold = 75
  const remaining = Math.max(0, freeShippingThreshold - subtotal)
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-[2px] animate-overlay-in"
        onClick={closeCart}
      />

      {/* Panel */}
      <aside
        ref={innerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-cream flex flex-col animate-drawer-in shadow-lift"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-espresso" />
            <h2 className="text-xs uppercase tracking-widest2 text-espresso">
              Your Cart {count > 0 && `(${count})`}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso hover:text-champagne-deep transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-b border-linen bg-sand/50">
            <p className="text-xs text-espresso mb-2">
              {remaining > 0 ? (
                <>
                  You're <span className="font-semibold text-champagne-deep">{formatPrice(remaining)}</span> away from free shipping
                </>
              ) : (
                <span className="text-champagne-deep font-semibold">You've unlocked free shipping</span>
              )}
            </p>
            <div className="h-[2px] bg-linen overflow-hidden">
              <div
                className="h-full bg-champagne transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-8">
              <ShoppingBag size={36} className="text-taupe/50" strokeWidth={1} />
              <p className="mt-5 font-serif text-2xl text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm text-taupe">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary mt-7"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-linen">
              {items.map((item) => (
                <li
                  key={`${item.slug}-${item.variant}`}
                  className="flex gap-4 px-6 py-5"
                >
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-20 bg-sand overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-${item.slug}-${item.variant}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="product-name text-sm text-ink hover:text-champagne-deep transition-colors"
                      >
                        {item.name}
                      </Link>
                      <span className="text-sm text-espresso font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <p className="text-xs text-taupe mt-1">{item.variant}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-linen">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.slug, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-xs text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.slug, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug, item.variant)}
                        className="text-xs text-taupe hover:text-espresso underline underline-offset-4 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-5 bg-ivory">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs uppercase tracking-widest2 text-taupe">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-taupe mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="btn-primary w-full">Proceed to Checkout</button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-3 text-xs uppercase tracking-widest2 text-espresso/70 hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
