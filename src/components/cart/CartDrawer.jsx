import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal hover:text-gold transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-sand mb-4" />
              <p className="text-taupe text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-gold underline underline-offset-4 bg-transparent border-none cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-sand/50">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-taupe uppercase tracking-wider">Image</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-xs text-charcoal truncate">{item.product.name}</h3>
                    <p className="text-xs text-taupe mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-sand text-charcoal hover:border-gold transition-colors bg-transparent rounded-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-charcoal w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-sand text-charcoal hover:border-gold transition-colors bg-transparent rounded-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="p-1 text-taupe hover:text-charcoal transition-colors self-start bg-transparent border-none"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-cream text-sm uppercase tracking-wider font-medium hover:bg-gold-dark transition-colors border-none cursor-pointer">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
