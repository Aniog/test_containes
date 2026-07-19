import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-ivory z-50 shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl text-stone-900">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
              <p className="font-serif text-lg text-stone-600 mb-2">Your cart is empty</p>
              <p className="text-sm text-stone-400 mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-stone-100 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-stone-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium text-stone-900 uppercase tracking-product">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-stone-900 mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-stone-300 hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-stone-300 hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-stone-400 hover:text-stone-600 underline transition-colors"
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
          <div className="border-t border-stone-200 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-stone-600">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-stone-900">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-stone-400">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-dark transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2 text-sm text-stone-500 hover:text-stone-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
