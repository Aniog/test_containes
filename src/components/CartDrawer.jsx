import { useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, itemCount } =
    useCart()

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, closeCart])

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
      />
      <div
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-velvet border-l border-cream/10 shadow-2xl transition-transform duration-500 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream/10">
          <h2 className="font-serif text-lg uppercase tracking-widest text-cream">
            Your Bag ({itemCount})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-warm-gray hover:text-cream transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="text-warm-gray mb-4" />
            <p className="font-serif text-xl text-cream mb-2">Your bag is empty</p>
            <p className="text-sm text-warm-gray mb-6">Discover something treasured.</p>
            <button
              type="button"
              onClick={closeCart}
              className="px-8 py-3 bg-accent text-velvet text-xs font-sans uppercase tracking-widest font-medium hover:bg-accent-hover transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velvet-secondary flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-widest text-cream truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-gray capitalize mt-1">{item.variant} tone</p>
                    <p className="text-sm text-cream mt-1.5">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-cream/20">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 text-warm-gray hover:text-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm text-cream font-sans">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 text-warm-gray hover:text-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-warm-gray hover:text-error transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-cream/10 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between text-cream">
                <span className="font-sans text-sm uppercase tracking-widest">Subtotal</span>
                <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-warm-gray">Shipping & taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full py-4 bg-accent text-velvet text-xs font-sans uppercase tracking-widest font-medium hover:bg-accent-hover transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full py-3 border border-cream/30 text-cream text-xs font-sans uppercase tracking-widest font-medium hover:border-accent hover:text-accent transition-colors"
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
