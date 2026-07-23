import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import { toast } from 'sonner'

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart()

  const handleCheckout = () => {
    toast.success('Thank you! Checkout would open here in production.')
    setIsCartOpen(false)
  }

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setIsCartOpen(false)} />
      )}
      <div className={`cart-drawer fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F8F5F0] z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8]">
          <h3 className="serif text-xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}><X size={20} /></button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-[#8B7E6F]">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  <div className="flex-1 text-sm">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-[#8B7E6F]">{item.selectedVariant}</div>
                    <div className="mt-1">{formatPrice(item.price)}</div>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="p-1">
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="p-1">
                        <Plus size={14} />
                      </button>
                      <button onClick={() => removeFromCart(item.cartId)} className="ml-auto text-[#8B7E6F] hover:text-[#1A1A1A]">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5E0D8]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Total</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <button onClick={handleCheckout} className="btn btn-primary w-full">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#8B7E6F] mt-4">Free worldwide shipping on all orders</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}