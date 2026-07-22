import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, cartTotal, updateQuantity, removeItem } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e7e5e4]">
          <h2 className="font-['Cormorant_Garamond'] text-xl font-semibold tracking-wide text-[#1a1814]">
            Shopping Bag ({items.reduce((sum, item) => sum + item.quantity, 0)})
          </h2>
          <button 
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-[#f7f4ef] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-[#57534e]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#d6d3d1] mb-4" />
              <p className="text-[#57534e] mb-6">Your bag is empty</p>
              <Button onClick={() => setCartOpen(false)} variant="outline">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-[#f7f4ef] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-[#a8a29e] text-center px-2">Product Image</span>
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-[#1a1814] truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#78716c] mt-0.5 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-medium text-[#1a1814] mt-1">
                      ${item.price}
                    </p>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-[#e7e5e4] rounded hover:border-[#c9a96e] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-[#1a1814] w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-[#e7e5e4] rounded hover:border-[#c9a96e] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-[#78716c] hover:text-[#1a1814] transition-colors"
                        aria-label="Remove item"
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
          <div className="p-6 border-t border-[#e7e5e4] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#57534e]">Subtotal</span>
              <span className="text-lg font-semibold text-[#1a1814]">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#78716c]">Shipping and taxes calculated at checkout</p>
            <Link to="/checkout" onClick={() => setCartOpen(false)}>
              <Button className="w-full" variant="accent" size="lg">
                Checkout
              </Button>
            </Link>
            <button 
              onClick={() => setCartOpen(false)}
              className="w-full text-sm text-[#57534e] hover:text-[#1a1814] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
