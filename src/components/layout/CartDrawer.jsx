import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm animate-fade-in"
        onClick={closeDrawer}
        aria-hidden="true"
      />
      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-velvet-100">
          <h3 className="font-serif text-lg tracking-wider">
            Cart ({items.length})
          </h3>
          <button
            onClick={closeDrawer}
            className="p-2 hover:bg-velvet-50 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3">
              <ShoppingBag className="w-12 h-12 text-velvet-300" />
              <p className="text-velvet-500 text-sm">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="text-xs tracking-[0.1em] uppercase font-semibold text-gold-600 hover:text-gold-500 underline underline-offset-4"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velvet-100">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-velvet-100 rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-serif text-sm tracking-wider uppercase">{item.name}</p>
                        <p className="text-xs text-velvet-500 mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-velvet-400 hover:text-velvet-700 transition-colors p-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velvet-200 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-velvet-50 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-velvet-50 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold tabular-nums">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velvet-100 px-5 py-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-velvet-600">Subtotal</span>
              <span className="font-semibold tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-velvet-500">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3 bg-velvet-900 text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-velvet-800 transition-colors rounded-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
