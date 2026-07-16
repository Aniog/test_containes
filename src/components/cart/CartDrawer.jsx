import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()
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
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [setIsOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-warm-black/40 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-muted-text hover:text-warm-black transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-border mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-muted-text">Your cart is empty</p>
              <p className="text-sm text-warm-gray mt-1">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-block bg-warm-black text-white px-8 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-border/50 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-product-name uppercase text-warm-black">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-text mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">{formatPrice(item.price)}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-muted-text hover:text-warm-black underline transition-colors"
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
          <div className="px-6 py-5 border-t border-border bg-surface">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-text">Subtotal</span>
              <span className="font-serif text-lg font-semibold">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-muted-text mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-warm-black text-white py-3.5 text-xs font-medium tracking-[0.12em] uppercase hover:bg-gold-dark transition-colors">
              Checkout — {formatPrice(totalPrice)}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 py-2 text-xs text-muted-text hover:text-warm-black transition-colors tracking-wide uppercase"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
