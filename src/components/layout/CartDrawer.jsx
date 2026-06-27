import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, itemCount, subtotal, toggleCart, removeItem, updateQuantity } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/40 z-50 backdrop-blur-sm"
        onClick={() => toggleCart(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[440px] bg-warm-white z-50 flex flex-col shadow-2xl animate-[slideIn_0.3s_ease]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-soft-sand">
          <h2 className="font-serif text-lg tracking-[0.06em] flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Your Bag ({itemCount})
          </h2>
          <button onClick={() => toggleCart(false)} className="p-1" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="w-12 h-12 text-taupe" />
              <p className="text-deep-taupe font-serif text-lg">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={() => toggleCart(false)}
                className="text-sm tracking-[0.08em] uppercase underline underline-offset-4 hover:text-gold"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-soft-sand rounded-sm flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={`[cart-${item.id}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={`cart-${item.id}-name`} className="hidden">{item.name} gold jewelry</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs tracking-[0.08em] uppercase font-serif font-semibold">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-deep-taupe mt-0.5">
                          {item.variant} Tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-0.5 text-taupe hover:text-espresso"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-soft-sand rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-soft-sand px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-deep-taupe">Subtotal</span>
              <span className="font-serif text-lg font-semibold">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-[11px] text-deep-taupe text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-warm-white py-3.5 text-sm tracking-[0.1em] uppercase font-medium hover:bg-rich-brown">
              Checkout
            </button>
            <button
              onClick={() => toggleCart(false)}
              className="w-full text-center text-xs tracking-[0.08em] uppercase underline underline-offset-4 hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

/* global animation */
const style = document.createElement('style')
style.textContent = `
@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}`
document.head.appendChild(style)
