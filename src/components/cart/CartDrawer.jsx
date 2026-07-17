import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl text-brand-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-brand-muted hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-sand mb-4" />
              <p className="font-serif text-lg text-brand-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-brand-muted">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-brand-ivory rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-brand-muted-light font-sans">IMG</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-brand-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-brand-muted-light hover:text-brand-charcoal transition-colors self-start"
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
          <div className="px-6 py-5 border-t border-brand-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="text-lg font-medium text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted-light mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-white py-3.5 text-xs uppercase tracking-wide-xl font-medium hover:bg-brand-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
