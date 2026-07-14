import React, { useEffect, useRef, useState } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { getResolvedImageUrl } from '@/lib/imageCache'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total, itemCount } = useCart()
  const [imageUrls, setImageUrls] = useState({})

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
      // Resolve image URLs from cache
      const urls = {}
      items.forEach(item => {
        const imgIds = [
          item.imgId,
          item.imgIdHover,
          `${item.imgId}-main-0`,
          `${item.imgId}-main-1`,
        ].filter(Boolean)
        urls[`${item.id}-${item.variant}`] = getResolvedImageUrl(imgIds)
      })
      setImageUrls(urls)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen, items])

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl text-charcoal">Your Bag ({itemCount})</h2>
          <button onClick={closeDrawer} className="text-stone-500 hover:text-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-stone-500">Discover something beautiful to add.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => {
                const imageUrl = imageUrls[`${item.id}-${item.variant}`]
                return (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-24 flex-shrink-0 bg-ivory rounded-sm overflow-hidden">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-300">
                          <ShoppingBag className="w-6 h-6" />
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-product text-charcoal truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">{item.variant}</p>
                      <p className="text-sm font-sans font-medium text-charcoal mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-stone-300 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-stone-500 hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center text-xs font-sans text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-stone-500 hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-stone-400 hover:text-charcoal underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-stone-600">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-hover text-cream font-sans text-xs font-semibold tracking-widest uppercase py-3.5 transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
