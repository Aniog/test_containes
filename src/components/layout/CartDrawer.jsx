import { X, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted-fg font-sans text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm uppercase tracking-widest text-gold hover:text-gold-light transition-colors bg-transparent border-none font-sans"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-fg mt-0.5 capitalize font-sans">
                      {item.variant} tone
                    </p>
                    <p className="text-sm text-charcoal mt-1 font-sans">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border bg-transparent rounded-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-charcoal" />
                      </button>
                      <span className="text-sm font-sans text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border bg-transparent rounded-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-charcoal" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="p-1 self-start bg-transparent border-none"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4 text-muted-fg hover:text-charcoal transition-colors" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-muted-fg uppercase tracking-widest">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gold text-white py-3.5 text-sm uppercase tracking-widest font-sans hover:bg-gold-light transition-colors border-none rounded-none">
              Checkout
            </button>
            <p className="text-xs text-muted-fg text-center mt-3 font-sans">
              Free shipping on orders over $75
            </p>
          </div>
        )}
      </div>
    </>
  )
}
