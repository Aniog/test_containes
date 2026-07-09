import { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const onCloseRef = useRef(onClose)

  // Keep the ref in sync
  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  const stopScroll = useCallback(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    stopScroll()
    return () => { document.body.style.overflow = '' }
  }, [open, stopScroll])

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onCloseRef.current()
      }
    }
    window.addEventListener('keydown', handleKey)
    // Also handle on document to catch all events
    document.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-white transform transition-transform duration-300 ease-out shadow-2xl flex flex-col',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-cream-700" />
            <span className="font-sans text-sm uppercase tracking-wider text-cream-700">
              Cart ({totalItems})
            </span>
          </div>
          <button onClick={onClose} className="p-1 text-cream-700 hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-cream-300 mb-4" />
              <p className="font-serif text-xl text-cream-500 mb-2">Your cart is empty</p>
              <p className="text-sm text-cream-400 mb-6">Discover our collection and find your next treasure.</p>
              <Button onClick={onClose} asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-cream-100">
                  <div className="w-20 h-24 bg-cream-50 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-sm uppercase tracking-wide text-cream-900">
                          {item.name}
                        </h3>
                        <p className="text-xs text-cream-500 mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-cream-400 hover:text-cream-700 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-cream-700 font-medium mt-2">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-cream-300 flex items-center justify-center text-cream-600 hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-cream-800 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-cream-300 flex items-center justify-center text-cream-600 hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
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
          <div className="border-t border-cream-200 px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm uppercase tracking-wider text-cream-600">Subtotal</span>
              <span className="font-serif text-xl text-cream-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-cream-400">Shipping calculated at checkout</p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
            <button
              onClick={onClose}
              className="w-full text-center text-xs uppercase tracking-wider text-cream-500 hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}