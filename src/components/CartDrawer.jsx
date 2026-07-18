import React, { useEffect, useRef } from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const drawerRef = useRef(null)

  const total = getCartTotal()

  // Close on outside click (non-blocking overlay pattern)
  // Only close if click is outside drawer AND not on cart trigger button
  useEffect(() => {
    if (!isCartOpen) return

    const handleClickOutside = (e) => {
      // Don't close if clicking the cart trigger button (it handles toggle)
      if (e.target.closest('[data-cart-trigger="true"]')) {
        return
      }
      
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart()
      }
    }

    // Use capture to ensure we can close even if other handlers stop propagation
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => document.removeEventListener('mousedown', handleClickOutside, true)
  }, [isCartOpen, closeCart])

  // Close on Escape key
  useEffect(() => {
    if (!isCartOpen) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeCart()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isCartOpen, closeCart])

  if (!isCartOpen) return null

  return (
    <>
      {/* Visual dim layer - does NOT block pointer events so page remains interactive */}
      <div className="fixed inset-0 bg-black/30 z-[60] pointer-events-none" />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] flex flex-col shadow-2xl open"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EDE8E0]">
          <h2 className="serif text-xl tracking-[0.1em]">YOUR CART</h2>
          <button 
            onClick={(e) => { e.stopPropagation(); closeCart(); }} 
            className="p-1 hover:text-[#A68B5B]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[#8A8178] mb-6">Your cart is empty</p>
            <Button onClick={closeCart} variant="outline">Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-[0.15em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#8A8178] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <p className="text-sm font-medium whitespace-nowrap">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#D4C9B9]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F2ED] transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#8A8178] hover:text-red-600 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#EDE8E0] px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#5C5651]">Subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-[#8A8178]">Shipping calculated at checkout</p>
              
              <Button className="w-full" size="lg">
                CHECKOUT
              </Button>
              
              <button 
                onClick={closeCart}
                className="w-full text-sm text-[#5C5651] hover:text-[#A68B5B] py-2 transition-colors"
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

export default CartDrawer
