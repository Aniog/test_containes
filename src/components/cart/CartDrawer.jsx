import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-cream-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300/40">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal-400 hover:text-charcoal transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-cream-400 mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-charcoal-400 mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal-300 mb-6">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-xs"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-cream-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-2xl text-gold/40">{item.name?.charAt(0) || 'V'}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium tracking-wider uppercase text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-400 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal mt-1">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-cream-300 flex items-center justify-center text-charcoal-400 hover:border-charcoal hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-cream-300 flex items-center justify-center text-charcoal-400 hover:border-charcoal hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-charcoal-300 hover:text-charcoal underline transition-colors"
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
          <div className="px-6 py-5 border-t border-cream-300/40 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-charcoal-500">Subtotal</span>
              <span className="font-serif text-lg font-medium text-charcoal">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-charcoal-300">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-primary text-center">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block text-center text-xs tracking-widest uppercase text-charcoal-400 hover:text-gold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
