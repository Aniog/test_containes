import { useEffect } from 'react'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'
import { StockImage } from '@/components/ui/StockImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, updateQuantity, removeItem, itemCount } = useCart()
  const cartRef = useImageLoader([isOpen])

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

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-velmora-dark/40 z-[70] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[80] shadow-2xl transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        ref={cartRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-5 border-b border-velmora-sand">
          <h2 className="font-serif text-2xl text-velmora-dark">Your Cart ({itemCount})</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-velmora-dark hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag size={48} className="text-velmora-sand mb-4" />
            <p className="font-serif text-xl text-velmora-dark mb-2">Your cart is empty</p>
            <p className="text-sm text-velmora-muted mb-6">Discover something beautiful today.</p>
            <Button onClick={closeCart}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 bg-velmora-warm">
                    <StockImage
                      id={`cart-${item.id}`}
                      query={item.image.query}
                      ratio="3x4"
                      width={200}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base text-velmora-dark truncate">{item.name}</h3>
                    <p className="text-xs text-velmora-muted uppercase tracking-wide mb-2">
                      {item.variant}
                    </p>
                    <p className="text-sm text-velmora-stone mb-3">${item.price}</p>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center border border-velmora-sand">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-velmora-warm transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-velmora-warm transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1.5 text-velmora-muted hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-velmora-sand bg-velmora-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-velmora-stone uppercase tracking-wide">Subtotal</span>
                <span className="font-serif text-xl text-velmora-dark">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted mb-5 text-center">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full mb-3">Checkout</Button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full py-3 text-xs tracking-widest uppercase text-velmora-dark hover:text-velmora-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
