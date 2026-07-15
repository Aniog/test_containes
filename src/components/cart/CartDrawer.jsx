import { useCart } from '@/context/CartContext'
import { X, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-deep-charcoal/60 z-50 transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-100">
          <h2 className="font-serif text-xl tracking-wide text-deep-charcoal">Your Bag</h2>
          <button onClick={closeDrawer} className="text-warm-gray-500 hover:text-deep-charcoal transition-colors p-1" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-warm-gray-500 mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-antique-white flex-shrink-0 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-super-wide uppercase text-deep-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-warm-gray-500 mt-0.5">{item.tone}</p>
                    <p className="font-sans text-sm text-deep-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-gray-200 text-warm-gray-500 hover:border-champagne-gold hover:text-champagne-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-deep-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-gray-200 text-warm-gray-500 hover:border-champagne-gold hover:text-champagne-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto font-sans text-xs text-warm-gray-400 hover:text-deep-charcoal underline transition-colors"
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
          <div className="border-t border-warm-gray-100 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm tracking-wide uppercase text-warm-gray-500">Subtotal</span>
              <span className="font-serif text-lg text-deep-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-warm-gray-400 mb-4">Shipping calculated at checkout</p>
            <button className="btn-primary w-full text-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
