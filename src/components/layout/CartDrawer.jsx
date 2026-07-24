import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const containerRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [open, items])

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 bg-charcoal/40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={containerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-soft-lg transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-charcoal" />
              <span className="text-sm font-medium text-charcoal">Cart ({totalItems})</span>
            </div>
            <button onClick={onClose} className="text-charcoal hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-beige mb-4" />
                <p className="text-sm text-taupe">Your cart is empty</p>
                <p className="text-xs text-taupe mt-1">Discover our collection and find something you love.</p>
                <Link
                  to="/shop"
                  className="btn-primary mt-6 inline-block"
                  onClick={onClose}
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-beige last:border-0">
                    {/* Image placeholder */}
                    <div className="w-20 h-24 bg-warm-light flex-shrink-0">
                      <img
                        data-strk-img-id={`cart-${item.id}-${item.variant}`}
                        data-strk-img={`[cart-title-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xs uppercase tracking-widest text-charcoal">{item.name}</h3>
                          <p className="text-xs text-taupe mt-0.5">18K {item.variant === 'gold' ? 'Gold' : 'Silver'} Plated</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-taupe hover:text-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-beige">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:bg-warm-light transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:bg-warm-light transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-charcoal">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-beige px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal">Subtotal</span>
                <span className="text-lg font-serif font-semibold text-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe">Free shipping on all orders</p>
              <button className="btn-primary w-full text-center">Checkout</button>
              <button
                onClick={onClose}
                className="block w-full text-center text-xs uppercase tracking-widest text-taupe hover:text-charcoal transition-colors"
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