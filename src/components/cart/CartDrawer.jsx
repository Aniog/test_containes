import React, { useEffect, useRef } from 'react'
import { X, Plus, Minus, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CartDrawer = () => {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal } = useCart()
  const drawerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  useEffect(() => {
    if (drawerOpen && contentRef.current) {
      ImageHelper.loadImages(strkImgConfig, contentRef.current)
    }
  }, [drawerOpen, items])

  if (!drawerOpen) return null

  return (
    <div className="fixed inset-0 z-[60]" ref={drawerRef}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Bag</h2>
          <button onClick={closeDrawer} className="p-1 text-stone-500 hover:text-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div ref={contentRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-stone-500 mb-2">Your bag is empty</p>
              <p className="font-sans text-sm text-stone-400">Discover something beautiful to add.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-ivory flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}-${item.tone}`}
                      data-strk-img={`[${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-charcoal truncate">{item.name}</h3>
                    <p className="font-sans text-xs text-stone-500 mt-0.5">{item.tone}</p>
                    <p className="font-sans text-sm font-medium text-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-stone-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="p-1 text-stone-500 hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-xs w-6 text-center text-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="p-1 text-stone-500 hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="font-sans text-[11px] uppercase tracking-wider text-stone-400 hover:text-charcoal transition-colors"
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
          <div className="border-t border-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm uppercase tracking-wider text-stone-500">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              Checkout <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartDrawer
