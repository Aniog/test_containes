import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col animate-[slideIn_0.3s_ease-out]">
        <style>{`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone">
          <h2 className="font-serif text-xl text-velmora-charcoal">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 hover:opacity-60">
            <X className="w-5 h-5 text-velmora-ink" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="w-10 h-10 text-velmora-stone" strokeWidth={1} />
              <p className="font-sans text-sm text-velmora-warmgray">Your cart is empty</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Placeholder image */}
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0 flex items-center justify-center">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <p className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal">
                        {item.name}
                      </p>
                      <p className="font-sans text-xs text-velmora-warmgray mt-0.5">
                        {item.variant}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          className="w-6 h-6 flex items-center justify-center border border-velmora-stone text-velmora-ink hover:border-velmora-ink transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm text-velmora-ink w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="w-6 h-6 flex items-center justify-center border border-velmora-stone text-velmora-ink hover:border-velmora-ink transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-sans text-sm text-velmora-ink">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 hover:opacity-60"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4 text-velmora-warmgray" strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-stone">
            <div className="flex items-center justify-between mb-5">
              <span className="font-sans text-sm text-velmora-warmgray uppercase tracking-wider">
                Subtotal
              </span>
              <span className="font-serif text-lg text-velmora-charcoal">
                ${subtotal}
              </span>
            </div>
            <button className="w-full btn-primary py-4">
              Checkout
            </button>
            <p className="text-center font-sans text-[11px] text-velmora-warmgray mt-3">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </div>
  )
}