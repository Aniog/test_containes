import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would be connected to a payment processor in production.');
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-[#F7F3EB] z-50 shadow-2xl transform transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD3]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#C5A46E]" />
            <h2 className="font-serif text-2xl text-[#1C1B19]">Your Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#E5DFD3] rounded-full transition-colors">
            <X className="w-5 h-5 text-[#6B6259]" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[#C5A46E] mb-4" />
            <p className="text-[#1C1B19] text-lg mb-2">Your cart is empty</p>
            <p className="text-[#6B6259] text-sm">Discover our collection of demi-fine jewelry</p>
            <Button onClick={onClose} className="mt-6" variant="outline">Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-[#E5DFD3] pb-6 last:border-0 last:pb-0">
                  <div className="w-20 h-20 bg-[#E5DFD3] rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-serif text-sm tracking-[1.5px] text-[#1C1B19] uppercase">{item.name}</p>
                        <p className="text-xs text-[#6B6259] mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-[#6B6259] hover:text-[#1C1B19] p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[#C5A46E] font-medium mt-1">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3] rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-[#E5DFD3] transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E5DFD3] transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-[#1C1B19]">
                        ${(item.price * item.quantity).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E5DFD3] px-6 py-5 bg-white">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-[#6B6259]">Total</span>
                <span className="font-serif text-2xl text-[#1C1B19]">${getCartTotal()}</span>
              </div>
              <p className="text-xs text-[#6B6259] mb-4">Shipping calculated at checkout</p>
              <Button onClick={handleCheckout} className="w-full mb-2" size="lg">
                Proceed to Checkout
              </Button>
              <Button onClick={onClose} variant="ghost" className="w-full text-sm">
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}