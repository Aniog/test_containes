import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-50 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50',
          'transform transition-transform duration-500 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-light">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button onClick={onClose} className="p-1 hover:opacity-70 transition-opacity">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-serif text-lg text-velmora-gray mb-2">Your cart is empty</p>
                <p className="text-sm text-velmora-stone">Discover pieces you'll love</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-warm flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-velmora-gray mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.product.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1 hover:bg-velmora-light rounded transition-colors"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1 hover:bg-velmora-light rounded transition-colors"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => removeItem(index)}
                          className="ml-auto p-1 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velmora-light px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-gray">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-stone">Shipping & taxes calculated at checkout</p>
              <Button variant="accent" size="lg" className="w-full">
                Checkout
              </Button>
              <button
                onClick={clearCart}
                className="text-xs text-velmora-stone hover:text-velmora-charcoal transition-colors w-full text-center"
              >
                Clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
