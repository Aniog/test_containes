import { Fragment } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart()

  return (
    <Fragment>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
            <h2 className="font-serif text-lg tracking-wide">Your Cart ({cartCount})</h2>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-stone-500 hover:text-stone-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
                <p className="text-stone-500 text-sm">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-4 text-sm text-[#C5A059] hover:text-[#A8863F] underline underline-offset-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map(item => (
                  <li key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-stone-100 rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-stone-500 text-sm mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border border-stone-200 rounded-sm hover:border-stone-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border border-stone-200 rounded-sm hover:border-stone-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs text-stone-400 hover:text-stone-900 underline underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-stone-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-stone-500">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone-400 mb-4">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-[#C5A059] hover:bg-[#A8863F] text-white text-sm tracking-widest uppercase py-3.5 rounded-sm transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}
