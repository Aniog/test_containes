import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from './Button'

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F0] z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD3]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#C5A46E]" />
            <h2 className="font-serif text-xl tracking-wide text-[#0A0806]">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-[#E5DFD3] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[#C5A46E]/40 mb-4" />
            <p className="text-[#5C5346] mb-2">Your cart is empty</p>
            <p className="text-sm text-[#8A7F6D]">Discover our collection and find something beautiful.</p>
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E5DFD3] rounded flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-serif text-sm tracking-[1.5px] text-[#0A0806] leading-tight">{item.name}</p>
                        <p className="text-xs text-[#8A7F6D] mt-0.5">{item.variant} Tone</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#8A7F6D] hover:text-[#0A0806] p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-[#5C5346] mt-1">{formatPrice(item.price)}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#C5A46E]/30 rounded">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#E5DFD3] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E5DFD3] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-[#0A0806]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5DFD3] px-6 py-6 bg-white">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-[#5C5346]">Total</span>
                <span className="font-serif text-2xl tracking-wide text-[#0A0806]">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-[#8A7F6D] mb-4">Shipping calculated at checkout</p>
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm text-[#5C5346] mt-4 hover:text-[#0A0806] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
