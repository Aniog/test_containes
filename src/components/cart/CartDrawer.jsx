import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-noir/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl font-medium text-espresso">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-charcoal transition-colors"
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
              <p className="font-serif text-lg text-espresso">Your cart is empty</p>
              <p className="text-sm text-stone mt-1">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-5 border-b border-sand last:border-0">
                  {/* Thumbnail placeholder */}
                  <div className="w-20 h-20 bg-ivory rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-stone font-medium uppercase tracking-product">
                      {item.variant}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium text-espresso uppercase tracking-product truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-stone mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-sand rounded-sm flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-sand rounded-sm flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-stone hover:text-gold transition-colors underline"
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
          <div className="px-6 py-5 border-t border-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-stone">Subtotal</span>
              <span className="text-lg font-serif font-medium text-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-cream text-sm font-medium uppercase tracking-product hover:bg-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
