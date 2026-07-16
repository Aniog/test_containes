import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, cartTotal, clearCart } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-xl transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-beige">
            <h2 className="font-serif text-lg uppercase tracking-[0.15em]">Your Cart</h2>
            <button onClick={onClose} className="p-1 hover:text-[#C9A96E] transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-warm-gray mb-4" />
                <p className="text-warm-gray font-sans text-sm">Your cart is empty</p>
                <button onClick={onClose} className="mt-4 btn-primary text-xs">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map(item => (
                  <div key={item.cartId} className="flex gap-4 pb-5 border-b border-warm-beige/60">
                    <div className="w-20 h-20 flex-shrink-0 bg-warm-beige/30 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="font-serif text-xs uppercase tracking-[0.15em] truncate">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="ml-2 text-warm-gray hover:text-charcoal transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-sans text-warm-gray mt-0.5">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-7 h-7 border border-warm-beige rounded flex items-center justify-center hover:bg-warm-beige/40 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-7 h-7 border border-warm-beige rounded flex items-center justify-center hover:bg-warm-beige/40 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-warm-beige px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-sans text-charcoal uppercase tracking-[0.1em]">Total</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-warm-gray hover:text-charcoal transition-colors font-sans uppercase tracking-[0.1em]"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}