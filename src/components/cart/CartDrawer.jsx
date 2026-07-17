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
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal hover:text-gold transition-colors bg-transparent border-none p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-muted-fg mt-2">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium text-charcoal uppercase tracking-product truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-fg mt-1 capitalize">{item.variant} tone</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 border border-border flex items-center justify-center bg-transparent hover:border-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 border border-border flex items-center justify-center bg-transparent hover:border-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-charcoal">
                        ${(item.product.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-muted-fg hover:text-charcoal transition-colors bg-transparent border-none p-1 self-start"
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
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-fg">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-xs text-muted-fg mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-4 bg-gold text-cream font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-light transition-colors border-none cursor-pointer">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
