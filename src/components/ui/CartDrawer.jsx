import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, isCartOpen, closeCart } = useCart();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor in production.');
    closeCart();
  };

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />
      
      <div 
        className={cn(
          "fixed top-0 right-0 h-screen w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E4DE] flex-shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#C5A46E]" />
            <h2 className="font-serif text-xl tracking-[1px]">Your Cart</h2>
          </div>
          <button onClick={closeCart} className="p-2 hover:bg-[#F5F2ED] rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[#E8E4DE] mb-4" />
            <p className="text-[#5C5651] mb-2">Your cart is empty</p>
            <p className="text-sm text-[#8B8178]">Discover our collection of demi-fine jewelry</p>
          </div>
        ) : (
          /* Content area: list + footer pinned to bottom */
          <div className="flex-1 flex flex-col min-h-0">
            {/* Scrollable items list */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 min-h-0">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-serif text-sm tracking-[1.5px] text-[#2C2825] uppercase">{item.name}</p>
                        <p className="text-xs text-[#8B8178] mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-[#8B8178] hover:text-[#2C2825] p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-[#C5A46E] mt-1">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E8E4DE] rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-[#F5F2ED] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer - always visible at bottom of drawer */}
            <div className="border-t border-[#E8E4DE] px-6 py-5 space-y-4 flex-shrink-0 bg-white">
              <div className="flex justify-between text-sm">
                <span className="text-[#5C5651]">Subtotal</span>
                <span className="font-medium">${getCartTotal().toFixed(0)}</span>
              </div>
              <p className="text-xs text-[#8B8178]">Shipping calculated at checkout</p>
              <Button onClick={handleCheckout} className="w-full" size="lg">
                PROCEED TO CHECKOUT
              </Button>
              <button 
                onClick={closeCart}
                className="w-full text-sm text-[#8B8178] hover:text-[#2C2825] py-2 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
