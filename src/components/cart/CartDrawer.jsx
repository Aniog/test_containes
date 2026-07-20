import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-serif text-2xl text-primary">Your Cart</h2>
            <button
              onClick={closeCart}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-border mb-4" />
                <p className="font-serif text-xl text-primary mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">Discover our collection and find something you love.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.key} className="flex gap-4">
                    <div className="w-20 h-20 bg-muted flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans text-sm font-medium uppercase tracking-product text-primary truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground capitalize mt-0.5">{item.variant} tone</p>
                      <p className="text-sm font-medium text-primary mt-1">${item.product.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium text-primary w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-auto text-xs text-muted-foreground hover:text-accent underline transition-colors"
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
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-serif text-xl text-primary">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping calculated at checkout</p>
              <button className="w-full bg-accent text-white py-3.5 uppercase tracking-widest text-sm font-medium hover:bg-accent-hover transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
