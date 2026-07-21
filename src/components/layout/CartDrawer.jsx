import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CartDrawer = () => {
  const { items, isOpen, setDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setDrawer(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between border-b border-[#f0f0f0] px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]">
            <ShoppingBag className="h-4 w-4" />
            <span>Your Cart ({totalItems})</span>
          </div>
          <button
            type="button"
            onClick={() => setDrawer(false)}
            className="rounded-full p-2 text-[#1a1a1a] hover:bg-[#f5f5f5]"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-[#c9a96e]" />
              <p className="text-sm text-[#1a1a1a]">Your cart is empty.</p>
              <Button variant="accentOutline" onClick={() => setDrawer(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.id} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-[#f5f5f5]">
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      src={`https://placehold.co/400x400/f5f5f5/1a1a1a?text=${encodeURIComponent(item.name)}`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#1a1a1a]">{item.name}</p>
                      <p className="text-xs text-[#1a1a1a]/70">${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-full border border-[#f0f0f0] p-1 text-[#1a1a1a] hover:border-[#c9a96e]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-medium text-[#1a1a1a]">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-full border border-[#f0f0f0] p-1 text-[#1a1a1a] hover:border-[#c9a96e]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-[#1a1a1a]/70 hover:text-[#c9a96e]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#f0f0f0] px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm font-medium text-[#1a1a1a]">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#1a1a1a]/70">Shipping and taxes calculated at checkout.</p>
            <Button variant="accent" className="w-full" onClick={() => alert('Checkout coming soon.')}>
              Checkout
            </Button>
          </div>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
