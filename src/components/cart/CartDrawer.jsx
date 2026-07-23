import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import Button from '@/components/ui/button'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const overlayRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-sans text-sm font-medium">
                Cart ({totalItems})
              </span>
            </div>
            <button onClick={onClose} className="p-1 hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-taupe/40 mb-4" />
                <p className="font-serif text-xl text-taupe mb-2">Your cart is empty</p>
                <p className="text-sm text-taupe mb-6">Add some treasures to get started</p>
                <Button variant="primary" onClick={onClose} asChild>
                  <Link to="/collection">Shop Now</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-divider">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-[#E5DDD3] flex-shrink-0 flex items-center justify-center">
                      <span className="text-[10px] text-taupe uppercase tracking-wider text-center px-1">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-sm uppercase tracking-wider text-[#1A1A1A]">
                            {item.name}
                          </h4>
                          <p className="text-xs text-taupe mt-0.5 capitalize">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-taupe hover:text-[#1A1A1A] transition-colors p-1 -mt-1 -mr-1"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-divider">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-divider px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm font-medium">Subtotal</span>
                <span className="font-serif text-lg font-semibold">${totalPrice.toFixed(0)}</span>
              </div>
              <p className="text-xs text-taupe">Shipping & taxes calculated at checkout</p>
              <Button variant="primary" className="w-full" onClick={() => alert('Checkout coming soon')}>
                Checkout
              </Button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-taupe hover:text-[#1A1A1A] transition-colors underline underline-offset-2"
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