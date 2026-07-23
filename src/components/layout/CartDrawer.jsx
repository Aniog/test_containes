import { useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn, formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, totalPrice, totalItems, closeDrawer, removeItem, updateQuantity } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-brand-black/60 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-brand-charcoal border-l border-brand-divider/10 transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-divider/10">
            <h2 className="font-serif text-xl tracking-wide text-brand-cream">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeDrawer}
              className="p-2 text-brand-cream/60 hover:text-brand-cream transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-brand-muted mb-4" />
                <p className="font-serif text-lg text-brand-cream/80 mb-2">Your cart is empty</p>
                <p className="text-sm text-brand-muted">Discover our curated collection</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 animate-fade-in"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-brand-graphite rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-gold font-serif text-lg">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-sans tracking-wider uppercase text-brand-cream truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm text-brand-gold mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-divider/20 text-brand-cream/60 hover:text-brand-cream hover:border-brand-divider/40 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-brand-cream w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-divider/20 text-brand-cream/60 hover:text-brand-cream hover:border-brand-divider/40 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-cream underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-brand-divider/10 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-brand-muted uppercase tracking-wider">Subtotal</span>
                <span className="text-lg font-serif text-brand-cream">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-brand-muted">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3.5 bg-brand-gold text-brand-black font-sans text-sm font-semibold tracking-wider uppercase hover:bg-brand-gold-light transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full py-2 text-sm text-brand-cream/60 hover:text-brand-cream tracking-wider uppercase transition-colors"
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
