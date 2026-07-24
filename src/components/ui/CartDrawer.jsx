import React, { useEffect, useRef } from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (isOpen && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div ref={containerRef} className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
            <h2 className="font-serif text-xl tracking-widest uppercase">Your Bag</h2>
            <button onClick={closeCart} className="text-foregroundMuted hover:text-foreground transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-serif text-lg text-foregroundMuted">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-4 font-sans text-sm tracking-wide uppercase text-accent hover:text-accentHover transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map(item => (
                  <div key={item.key} className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-surfaceAlt rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.imageUrl}
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[${item.descId}] [${item.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="160"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors block truncate"
                      >
                        {item.name}
                      </Link>
                      <p className="font-sans text-xs text-foregroundMuted mt-1">Tone: {item.tone}</p>
                      <p className="font-sans text-sm text-foreground mt-2 font-medium">${item.price}</p>
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-hairline text-foregroundMuted hover:text-foreground hover:border-accent transition-colors rounded-none"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-hairline text-foregroundMuted hover:text-foreground hover:border-accent transition-colors rounded-none"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-auto font-sans text-xs text-foregroundMuted hover:text-foreground transition-colors tracking-wide uppercase"
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
            <div className="border-t border-hairline px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-foregroundMuted tracking-wide uppercase">Subtotal</span>
                <span className="font-serif text-lg text-foreground">${totalPrice}</span>
              </div>
              <p className="font-sans text-xs text-foregroundMuted mb-4">Shipping calculated at checkout</p>
              <button
                className="w-full bg-accent hover:bg-accentHover text-foreground font-sans text-sm tracking-widest uppercase py-3 transition-colors duration-200 rounded-none"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
