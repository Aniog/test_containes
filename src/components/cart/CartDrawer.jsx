import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, removeItem, updateQuantity } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeCart() }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-ivory shadow-2xl flex flex-col animate-slide-down"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wider uppercase">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-1 text-velmora-muted hover:text-velmora-black transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-border mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-velmora-muted">Your cart is empty</p>
              <p className="text-sm text-velmora-warm mt-1">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary mt-6 text-xs"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-velmora-cream rounded overflow-hidden flex-shrink-0">
                    <div
                      className="w-full h-full"
                      style={{
                        background: 'linear-gradient(135deg, #d4c5a0 0%, #e8dcc8 40%, #c9b88a 100%)',
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm text-velmora-black">{item.name}</p>
                        <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-velmora-warm hover:text-velmora-black transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-velmora-muted hover:text-velmora-black transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 py-1 text-xs font-medium text-velmora-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-velmora-muted hover:text-velmora-black transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-velmora-black">
                        {formatPrice(item.price * item.quantity)}
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
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-velmora-muted uppercase tracking-wider">Subtotal</span>
              <span className="text-lg font-medium text-velmora-black">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-velmora-warm">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-xs">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-velmora-muted hover:text-velmora-black tracking-wider uppercase transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
