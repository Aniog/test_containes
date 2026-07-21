import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-ink" />
              <span className="font-serif text-lg font-medium">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1 text-ink/60 hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
                <p className="text-ink/60 text-sm">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 inline-block text-sm uppercase tracking-[0.12em] text-gold-500 hover:text-gold-600 transition-colors"
                >
                  Shop the collection
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-5 border-b border-velvet-200/60"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-velvet-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-medium uppercase tracking-[0.08em] text-ink truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-ink/50 mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-ink mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-1 text-ink/50 hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-1 text-ink/50 hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-[11px] uppercase tracking-[0.1em] text-ink/40 hover:text-ink/70 transition-colors"
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
            <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-ink/60">Subtotal</span>
                <span className="font-serif text-lg font-medium text-ink">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-ink/40 tracking-wide">
                Free shipping on orders over $75
              </p>
              <button className="w-full bg-ink text-cream uppercase tracking-[0.12em] text-sm py-3.5 hover:bg-ink/90 transition-colors">
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs uppercase tracking-[0.12em] text-ink/50 hover:text-ink transition-colors"
              >
                Continue shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}