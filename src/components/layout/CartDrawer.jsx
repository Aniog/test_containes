import React, { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, itemCount, subtotal, closeCart, removeItem, updateQuantity } = useCart()
  const cartItems = Object.entries(items)
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const frame = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [isOpen, items])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-onyx-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-ivory-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <h2 className="font-serif text-xl text-onyx-900">
              Your Cart
              {itemCount > 0 && (
                <span className="ml-2 font-sans text-sm text-onyx-400">({itemCount})</span>
              )}
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-onyx-400 hover:text-onyx-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
                <p className="font-serif text-lg text-onyx-600 mb-2">Your cart is empty</p>
                <p className="font-sans text-sm text-onyx-400">
                  Discover our curated collection of fine jewelry.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 btn-outline-gold text-xs"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(([key, item]) => (
                  <div key={key} className="flex gap-4 py-4 border-b border-velvet-100 last:border-0">
                    {/* Product image */}
                    <div className="w-20 h-24 bg-velvet-100 rounded overflow-hidden flex-shrink-0">
                      {products.map((p) => (
                        p.id === item.product.id && (
                          <img
                            key={p.id}
                            className="w-full h-full object-cover"
                            data-strk-img-id={`cart-${p.id}`}
                            data-strk-img={`[${p.descId}] [${p.titleId}] jewelry product`}
                            data-strk-img-ratio="3x4"
                            data-strk-img-width="200"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={p.name}
                          />
                        )
                      ))}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide uppercase text-onyx-900 truncate">
                        {item.product.name}
                      </h3>
                      <p className="font-sans text-xs text-onyx-400 mt-0.5 capitalize">
                        {item.variant}
                      </p>
                      <p className="font-sans text-sm font-medium text-onyx-900 mt-1">
                        {formatPrice(item.product.price)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(key, item.quantity - 1)}
                          className="w-7 h-7 border border-velvet-300 flex items-center justify-center text-onyx-500 hover:border-onyx-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm text-onyx-900 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(key, item.quantity + 1)}
                          className="w-7 h-7 border border-velvet-300 flex items-center justify-center text-onyx-500 hover:border-onyx-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeItem(key)}
                      className="self-start p-1 text-onyx-300 hover:text-onyx-600 transition-colors"
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
          {cartItems.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-onyx-500">Subtotal</span>
                <span className="font-serif text-lg text-onyx-900">{formatPrice(subtotal)}</span>
              </div>
              <p className="font-sans text-xs text-onyx-400">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full btn-gold py-4 text-sm">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center font-sans text-xs tracking-ultra-wide uppercase text-onyx-500 hover:text-onyx-800 transition-colors py-2"
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
