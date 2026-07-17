import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
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
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory-100 z-[70] shadow-elevated',
          'transform transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl text-stone-900 tracking-wide">
            Your Cart
            {totalItems > 0 && (
              <span className="ml-2 text-sm font-sans text-stone-500 font-normal">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-stone-500 hover:text-stone-800 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ height: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-stone-300 mb-4" />
              <p className="font-serif text-lg text-stone-600 mb-2">Your cart is empty</p>
              <p className="text-sm text-stone-400">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-stone-100 last:border-b-0"
                >
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-md bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center border border-stone-200">
                    <span className="font-serif text-xl text-gold font-medium">
                      {item.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium text-stone-900 tracking-wide uppercase">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5 capitalize">{item.variant}</p>
                    <p className="text-sm font-medium text-stone-800 mt-1">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-stone-500 hover:text-stone-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-stone-500 hover:text-stone-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-stone-400 hover:text-stone-600 underline transition-colors"
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
          <div className="absolute bottom-0 left-0 right-0 bg-ivory-100 border-t border-stone-200 px-6 py-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-stone-600">Subtotal</span>
              <span className="font-serif text-lg font-medium text-stone-900">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-stone-400">Shipping calculated at checkout</p>
            <button className="w-full bg-stone-900 text-white py-3.5 text-[13px] font-medium tracking-widest-xl uppercase hover:bg-stone-800 transition-colors rounded-sm">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-stone-500 hover:text-stone-700 transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
