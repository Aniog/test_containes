import { useCart } from '@/context/CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, itemCount, subtotal } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-400 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-surface z-50 shadow-2xl transform transition-transform duration-500 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-lg tracking-wide">
              Your Bag {itemCount > 0 && `(${itemCount})`}
            </h2>
            <button onClick={closeDrawer} className="text-velmora-muted hover:text-velmora-warm transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velmora-muted gap-3">
                <ShoppingBag className="w-10 h-10" />
                <p className="text-sm">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="btn-outline inline-block mt-2"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-velmora-border">
                {items.map((item) => (
                  <li key={`${item.id}-${item.color}`} className="py-4 flex gap-4">
                    <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 flex items-center justify-center">
                      <img
                        data-strk-img-id={`cart-${item.id}`}
                        data-strk-img={`[cart-name-${item.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <span id={`cart-name-${item.id}`} className="hidden">{item.name} gold jewelry</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm tracking-wide uppercase truncate">{item.name}</p>
                      <p className="text-xs text-velmora-muted mt-0.5">{item.color} Tone</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                          className="w-7 h-7 border border-velmora-border flex items-center justify-center hover:border-velmora-warm transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                          className="w-7 h-7 border border-velmora-border flex items-center justify-center hover:border-velmora-warm transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.color)}
                      className="text-velmora-muted hover:text-velmora-warm transition-colors self-start mt-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-border px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">Checkout</button>
              <button
                onClick={closeDrawer}
                className="btn-ghost w-full text-center block"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}