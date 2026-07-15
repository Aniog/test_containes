import React, { useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/utils'
import { Link, useLocation } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, cartTotal } = useCart()
  const location = useLocation()

  // Close cart drawer on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [location.pathname])

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor.')
    setIsOpen(false)
  }

  return (
    <>
      {/* Overlay - only visible when drawer is open, closes on click */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer fixed top-0 right-0 h-full w-full max-w-md bg-[#F7F4EF] z-50 flex flex-col ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EDE8E0]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 -mr-2">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#EDE8E0] mb-4" />
            <p className="text-[#6B635C] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="btn btn-outline"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE8E0] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-[0.12em] pr-4">{item.name}</p>
                        <p className="text-xs text-[#6B635C] mt-0.5 capitalize">{item.variant} tone</p>
                      </div>
                      <p className="text-sm font-medium whitespace-nowrap">{formatPrice(item.price)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#EDE8E0]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#EDE8E0] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#EDE8E0] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#6B635C] hover:text-[#0D0D0D] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#EDE8E0] px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B635C]">Subtotal</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-[#6B635C]">Shipping calculated at checkout</p>
              <button onClick={handleCheckout} className="btn btn-primary w-full">
                Proceed to Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-outline w-full"
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
