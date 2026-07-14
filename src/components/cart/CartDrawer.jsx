import { useEffect, useRef } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(frameId)
  }, [isOpen, items])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div ref={containerRef} className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-100 z-50 flex flex-col animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300">
          <h2 className="heading-serif text-xl tracking-[0.1em] text-warm-900">Your Cart</h2>
          <button onClick={closeCart} className="text-warm-800 hover:text-warm-900 transition-colors" aria-label="Close cart">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-cream-400 mb-4" />
              <p className="heading-serif text-lg text-warm-800/60 mb-2">Your cart is empty</p>
              <p className="text-xs text-warm-800/40 tracking-wide">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 flex-shrink-0 bg-cream-200/50 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-thumb-${item.id}-${item.variant}`}
                      data-strk-img={`[cart-item-name-${item.id}] gold jewelry product`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p id={`cart-item-name-${item.id}`} className="text-product-name text-xs text-warm-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-warm-800/50 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-warm-900 mt-1">{formatPrice(item.price)}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-cream-400 text-warm-800 hover:border-gold-500 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-medium text-warm-900 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-cream-400 text-warm-800 hover:border-gold-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-warm-800/40 hover:text-warm-900 underline ml-auto transition-colors"
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
          <div className="border-t border-cream-300 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-800/60 tracking-wide uppercase">Subtotal</span>
              <span className="text-lg font-medium text-warm-900">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-warm-800/40 text-center">Shipping & taxes calculated at checkout</p>
            <button className="btn-gold w-full text-center">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
