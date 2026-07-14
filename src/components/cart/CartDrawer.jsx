import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-brand-espresso/40 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl text-brand-espresso">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-brand-charcoal hover:opacity-70 transition-opacity"
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
              <p className="font-serif text-lg text-brand-charcoal">Your cart is empty</p>
              <p className="text-sm text-brand-muted mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-5 border-b border-brand-sand last:border-0">
                  {/* Thumbnail placeholder */}
                  <div className="w-20 h-20 bg-brand-ivory flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-brand-warm-gray uppercase tracking-wide">img</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs font-medium tracking-product uppercase text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5 capitalize">{item.variant}</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-brand-sand flex items-center justify-center text-brand-charcoal hover:border-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-medium text-brand-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-brand-sand flex items-center justify-center text-brand-charcoal hover:border-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal underline transition-colors"
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
          <div className="px-6 py-5 border-t border-brand-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-brand-charcoal">Subtotal</span>
              <span className="font-sans text-base font-medium text-brand-charcoal">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-brand-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
