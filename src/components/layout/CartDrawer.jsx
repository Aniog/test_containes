import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-surface shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 hairline-b">
            <h2 className="font-serif text-lg tracking-wider">
              YOUR BAG ({itemCount})
            </h2>
            <button
              onClick={onClose}
              className="p-1 text-velmora-text-secondary hover:text-velmora-text transition-colors"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <ShoppingBag className="w-12 h-12 text-velmora-text-muted" strokeWidth={1} />
                <p className="text-velmora-text-secondary text-sm">Your bag is empty.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.color}`}
                    className="flex gap-4 pb-5 hairline-b"
                  >
                    {/* Thumb */}
                    <div
                      className={`w-20 h-20 flex-shrink-0 bg-gradient-to-br ${item.image} rounded-sm`}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="product-name text-xs tracking-[0.15em] mb-1 text-velmora-text">
                        {item.name}
                      </h4>
                      <p className="text-xs text-velmora-text-secondary mb-2">
                        {item.color} Tone
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-border rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.color, item.quantity - 1)
                            }
                            className="p-1.5 hover:text-velmora-accent transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.color, item.quantity + 1)
                            }
                            className="p-1.5 hover:text-velmora-accent transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">${item.price * item.quantity}</span>
                          <button
                            onClick={() => removeItem(item.id, item.color)}
                            className="text-velmora-text-muted hover:text-red-500 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
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
          {items.length > 0 && (
            <div className="px-6 py-5 hairline-t">
              <div className="flex justify-between mb-4 text-sm">
                <span className="text-velmora-text-secondary">Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-velmora-text-muted mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="btn-accent w-full mb-3">
                CHECKOUT — ${subtotal}
              </button>
              <button
                onClick={onClose}
                className="w-full text-xs text-velmora-text-secondary tracking-wider uppercase hover:text-velmora-text transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}