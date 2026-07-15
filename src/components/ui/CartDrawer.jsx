import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from './Button'

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    clearCart 
  } = useCart()

  if (!isCartOpen) return null

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor in production.')
    clearCart()
    setIsCartOpen(false)
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#F5F2ED] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-[#A67C52]" />
            <h2 className="font-serif text-xl tracking-wide text-[#1A1816]">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-[#E5E0D8] rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-[#4A4640]" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-12 w-12 text-[#C5B8A8] mb-4" />
            <p className="text-[#4A4640] mb-2">Your cart is empty</p>
            <p className="text-sm text-[#8B8178]">Discover our collection and find something beautiful.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E5E0D8] rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.images?.[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-serif text-sm tracking-[1.5px] text-[#1A1816] pr-2">{item.name}</p>
                        <p className="text-xs text-[#8B8178] mt-0.5 capitalize">{item.selectedVariant} tone</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#8B8178] hover:text-[#1A1816] p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-[#4A4640] mt-1">{formatPrice(item.price)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-[#E5E0D8] rounded">
                        <button 
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)}
                          className="p-1.5 hover:bg-[#E5E0D8] transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)}
                          className="p-1.5 hover:bg-[#E5E0D8] transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm text-[#8B8178]">
                        {formatPrice(item.price * (item.quantity || 1))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5E0D8] px-6 py-6 bg-white">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-[#4A4640]">Total</span>
                <span className="font-serif text-2xl tracking-wide text-[#1A1816]">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-[#8B8178] mb-4">Shipping calculated at checkout</p>
              <Button onClick={handleCheckout} className="w-full mb-3" size="lg">
                PROCEED TO CHECKOUT
              </Button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full text-sm text-[#4A4640] hover:text-[#1A1816] py-2 transition-colors"
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
