import { useEffect, useRef } from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total, itemCount } = useCart()
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
      requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, contentRef.current)
      })
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
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-brand-cream animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-lg tracking-wide text-brand-charcoal">
            Your Bag ({itemCount})
          </h2>
          <button onClick={closeDrawer} className="text-brand-muted hover:text-brand-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div ref={contentRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-muted">Your bag is empty</p>
              <p className="text-sm text-brand-muted-light mt-2">Discover something you love.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 bg-brand-warm rounded overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-product-name text-brand-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-brand-muted mt-1">{item.tone}</p>
                    <p className="font-sans text-sm text-brand-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-brand-muted-light hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
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
          <div className="border-t border-brand-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted-light mb-4">Shipping calculated at checkout</p>
            <button className="btn-primary w-full text-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
