import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-serif text-lg">Cart ({totalItems})</span>
            </div>
            <button onClick={onClose} className="p-1 hover:text-primary transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-6">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-border">
                {items.map((item, index) => (
                  <li key={`${item.id}-${item.material}-${index}`} className="py-4 flex gap-4">
                    <div className="w-20 h-20 bg-muted flex-shrink-0 overflow-hidden">
                      <img
                        src={item.images?.[0] || item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="product-name text-sm">{item.name}</h4>
                          {item.material && (
                            <p className="text-xs text-muted-foreground mt-0.5 capitalize">{item.material}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-muted-foreground hover:text-destructive transition-colors ml-2"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="p-1.5 hover:text-primary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="p-1.5 hover:text-primary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border px-6 py-5">
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-xl">${totalPrice.toFixed(0)}</span>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors">
                Checkout
              </button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Free shipping on all orders
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}