import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="serif-heading text-xl">Your Cart ({items.length})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="serif-heading text-xl text-foreground mb-2">Your cart is empty</p>
              <p className="text-muted-foreground text-sm mb-6">
                Discover our collection and find something you love.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 px-6 py-5">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-secondary rounded-sm flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm text-foreground mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground capitalize mb-3">
                      {item.variant} tone
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 hover:bg-secondary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-secondary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${item.price * item.quantity}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(index)}
                    className="text-muted-foreground hover:text-foreground transition-colors self-start p-1"
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
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="serif-heading text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Shipping calculated at checkout. Free worldwide shipping on orders over $75.
            </p>
            <button
              onClick={() => toast.info('Checkout coming soon!')}
              className="w-full btn-primary text-center"
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
