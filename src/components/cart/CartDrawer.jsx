import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, cartTotal, updateQuantity, removeItem } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E4DF]">
            <h2 className="font-serif text-lg text-[#1C1917]">Shopping Bag</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 hover:bg-[#F5F5F4] rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-[#57534E]" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#D6D3D1] mb-4" />
                <p className="text-[#78716C] font-serif text-lg mb-2">Your bag is empty</p>
                <p className="text-sm text-[#A8A29E] mb-6">Looks like you haven't added any treasures yet.</p>
                <Button
                  variant="outline"
                  onClick={() => setCartOpen(false)}
                  className="rounded-full"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F5F5F4] rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.images?.primary}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm text-[#1C1917] truncate">{item.name}</h3>
                      <p className="text-xs text-[#78716C] mt-0.5 capitalize">{item.category}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E8E4DF] rounded-full">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#F5F5F4] transition-colors rounded-l-full"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5 text-[#57534E]" />
                          </button>
                          <span className="px-3 text-sm text-[#1C1917] min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#F5F5F4] transition-colors rounded-r-full"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5 text-[#57534E]" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-[#1C1917]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-[#A8A29E] hover:text-[#57534E] transition-colors self-start"
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
            <div className="border-t border-[#E8E4DF] p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#78716C]">Subtotal</span>
                <span className="font-medium text-[#1C1917]">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#A8A29E]">Shipping and taxes calculated at checkout</p>
              <Button className="w-full rounded-full" size="lg">
                Checkout
              </Button>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full text-center text-sm text-[#78716C] hover:text-[#C9A96E] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
