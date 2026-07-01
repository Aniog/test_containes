import { useEffect, useRef } from 'react'
import { useCart } from './CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (drawerOpen && drawerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    }
  }, [drawerOpen, items])

  if (!drawerOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={closeDrawer}
      />
      <div ref={drawerRef} className="fixed right-0 top-0 h-full w-full max-w-md bg-surface z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <h2 className="font-serif text-xl tracking-product uppercase">Your Bag</h2>
          <button onClick={closeDrawer} className="p-1 hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted">
              <ShoppingBag className="w-12 h-12 mb-4 stroke-1" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="text-sm mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-surface-warm rounded flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={`[cart-title-${item.id}-${item.variant}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 id={`cart-title-${item.id}-${item.variant}`} className="font-serif text-sm uppercase tracking-product leading-tight">{item.name}</h3>
                    <p className="text-xs text-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-divider rounded-sm hover:border-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-divider rounded-sm hover:border-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-muted hover:text-base transition-colors underline"
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
          <div className="border-t border-divider px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
              <span className="font-serif text-lg">${totalPrice}</span>
            </div>
            <button className="w-full bg-gold hover:bg-gold-hover text-white py-3 font-sans text-xs uppercase tracking-nav transition-colors">
              Checkout
            </button>
            <p className="text-xs text-muted text-center">Free shipping on all orders</p>
          </div>
        )}
      </div>
    </>
  )
}
