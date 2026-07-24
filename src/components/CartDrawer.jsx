import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-midnight-900/10">
            <h2 className="font-serif text-xl tracking-wider">
              Shopping Bag
              {items.length > 0 && (
                <span className="text-sm font-sans text-midnight-400 ml-2 font-normal">
                  ({items.reduce((s, i) => s + i.quantity, 0)})
                </span>
              )}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-midnight-300 mb-4" />
                <p className="font-serif text-lg text-midnight-600 mb-2">
                  Your bag is empty
                </p>
                <p className="text-sm text-midnight-400 mb-6">
                  Discover pieces you'll love.
                </p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="btn-primary text-xs"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-5 border-b border-midnight-900/5"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-ivory rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xs tracking-widest uppercase font-medium">
                            {item.name}
                          </h3>
                          <p className="text-[11px] text-midnight-400 mt-0.5">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-midnight-400 hover:text-midnight-900 transition-colors p-0.5"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-midnight-900/15 rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-1.5 hover:bg-midnight-900/5 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-1.5 hover:bg-midnight-900/5 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-midnight-900/10 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-midnight-500">Subtotal</span>
                <span className="text-lg font-serif font-medium">
                  ${total.toFixed(0)}
                </span>
              </div>
              <p className="text-[11px] text-midnight-400">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full text-xs">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="text-[11px] text-midnight-400 hover:text-midnight-900 underline underline-offset-2 transition-colors w-full text-center"
              >
                Clear bag
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}