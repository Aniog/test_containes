import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { productImageMap } from '@/data/images'

export default function CartDrawer() {
  const { items, isOpen, totalPrice, totalItems, closeCart, removeItem, updateQuantity } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-brand-charcoal/40 z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-brand-ivory z-[70] flex flex-col transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-taupe/15">
          <h2 className="font-serif text-xl tracking-[-0.01em] text-brand-charcoal">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-brand-charcoal hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-taupe/40 mb-4" />
              <p className="font-serif text-xl text-brand-charcoal mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-brand-taupe mb-6">
                Looks like you haven&apos;t added any jewelry yet.
              </p>
              <button onClick={closeCart} className="btn-outline text-xs">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const imgData = productImageMap[item.image]
                return (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 animate-fade-in"
                  >
                    {/* Product image */}
                    <div className="w-20 h-24 bg-brand-warm flex-shrink-0 overflow-hidden">
                      <img
                        data-strk-img-id={imgData?.cartStrkImgId || `cart-${item.id}-${item.variant}`}
                        data-strk-img={imgData?.strkImgQuery || 'gold jewelry elegant'}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-[0.7rem] truncate">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-brand-taupe mt-0.5">
                        {item.variant}
                      </p>
                      <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-brand-taupe/20">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-brand-charcoal hover:text-brand-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-xs w-8 text-center text-brand-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-brand-charcoal hover:text-brand-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="font-sans text-xs text-brand-taupe hover:text-brand-charcoal underline transition-colors"
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
          <div className="border-t border-brand-taupe/15 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-brand-taupe">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="font-sans text-xs text-brand-taupe">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full text-xs">
              Checkout — {formatPrice(totalPrice)}
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center font-sans text-xs text-brand-taupe hover:text-brand-charcoal underline transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
