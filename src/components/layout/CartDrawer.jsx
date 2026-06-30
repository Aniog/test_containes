import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-parchment z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-serif text-lg text-obsidian">Your Cart</span>
            {totalItems > 0 && (
              <span className="text-xs font-sans text-driftwood">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-driftwood hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-stone" />
              <p className="font-serif text-xl text-obsidian">Your cart is empty</p>
              <p className="text-sm text-driftwood font-sans">Discover our collection of fine jewelry</p>
              <Button variant="outline" onClick={() => setIsOpen(false)} className="mt-2">
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-stone/15">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-linen to-stone/20 flex items-center justify-center">
                      <span className="text-xs text-driftwood font-sans uppercase tracking-widest">
                        {item.category?.charAt(0) || 'J'}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight mb-1">
                      {item.name}
                    </p>
                    <p className="text-xs text-driftwood font-sans capitalize mb-3">
                      {item.variant} tone
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-stone/30">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-driftwood hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-sans text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-driftwood hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-sans text-sm font-medium text-obsidian">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="self-start p-1 text-stone hover:text-obsidian transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans uppercase tracking-widest text-driftwood">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-driftwood font-sans">Shipping & taxes calculated at checkout</p>
            <Button variant="primary" size="lg" className="w-full">
              Proceed to Checkout
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-xs font-sans uppercase tracking-widest text-driftwood hover:text-obsidian transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
