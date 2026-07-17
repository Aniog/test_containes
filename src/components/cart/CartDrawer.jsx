import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-warm">
          <h2 className="font-serif text-2xl text-charcoal">Your Cart ({totalItems})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-sm transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border-warm mb-4" />
              <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-fg">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium uppercase tracking-product text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-fg mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border-warm hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border-warm hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="self-start p-1 hover:bg-muted rounded-sm transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4 text-muted-fg" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border-warm px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-fg">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-fg">Shipping calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-dark text-cream py-3.5 font-sans text-sm font-medium uppercase tracking-button transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
