import { useEffect, useRef } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, totalPrice, totalItems, closeCart, updateQuantity, removeItem } = useCart()
  const drawerRef = useRef(null)
  const itemList = Object.entries(items)

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal-900/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream-50 shadow-2xl flex flex-col animate-slide-down"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h2 className="font-serif text-lg tracking-widest uppercase text-charcoal-800">
            Shopping Bag ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {itemList.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag size={48} className="text-charcoal-200 mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-charcoal-600 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-400 mb-6">Explore our collection to find your perfect piece</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {itemList.map(([key, item]) => (
                <div key={key} className="flex gap-4 pb-6 border-b border-charcoal-50 last:border-0">
                  {/* Product image */}
                  <div className="w-24 h-28 bg-stone-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-2">
                      <ShoppingBag size={20} className="text-charcoal-300 mx-auto mb-1" strokeWidth={1} />
                      <p className="text-[9px] text-charcoal-400 leading-tight truncate">
                        {item.name.split(' ').slice(0, 2).join(' ')}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-product-name text-sm text-charcoal-800 mb-0.5 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-charcoal-400 mb-2">{item.variantLabel}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-charcoal-200">
                        <button
                          onClick={() => updateQuantity(key, item.quantity - 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-medium text-charcoal-800 min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(key, item.quantity + 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price & remove */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-charcoal-800">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(key)}
                          className="text-xs text-charcoal-400 hover:text-charcoal-800 underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {itemList.length > 0 && (
          <div className="border-t border-charcoal-100 px-6 py-5 bg-cream-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-charcoal-500">Subtotal</span>
              <span className="text-sm font-medium text-charcoal-800">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-charcoal-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full btn-primary mb-3">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs tracking-widest uppercase text-charcoal-500 hover:text-charcoal-800 transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
