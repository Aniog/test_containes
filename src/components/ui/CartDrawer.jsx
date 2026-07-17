import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor in production.');
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#F5F2ED] z-50 shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#EDE8E0]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#C5A46E]" />
              <h2 className="font-serif text-2xl text-[#1A1A1A]">Your Cart</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-[#EDE8E0] rounded-full transition-colors">
              <X className="w-5 h-5 text-[#6B6359]" />
            </button>
          </div>

          {/* Content */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-[#C5A46E] mb-4" />
              <p className="text-[#1A1A1A] text-lg mb-2">Your cart is empty</p>
              <p className="text-[#6B6359] text-sm mb-6">Discover our collection of demi-fine jewelry</p>
              <Button onClick={onClose} variant="outline">Continue Shopping</Button>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#EDE8E0] rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-serif text-sm uppercase tracking-[1.5px] text-[#1A1A1A] pr-2">{item.name}</p>
                          <p className="text-xs text-[#8B7B6B] mt-0.5">{item.variant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-[#8B7B6B] hover:text-[#1A1A1A] transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[#C5A46E] font-medium mt-1">${item.price}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#EDE8E0] rounded">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                            className="p-1.5 hover:bg-[#EDE8E0] transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#EDE8E0] transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-sm text-[#6B6359]">
                          ${(item.price * item.quantity).toFixed(0)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#EDE8E0] px-6 py-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B6359]">Subtotal</span>
                  <span className="font-medium text-[#1A1A1A]">${getTotalPrice()}</span>
                </div>
                <p className="text-xs text-[#8B7B6B]">Shipping calculated at checkout</p>
                <Button onClick={handleCheckout} className="w-full" size="lg">
                  CHECKOUT
                </Button>
                <button 
                  onClick={onClose}
                  className="w-full text-sm text-[#6B6359] hover:text-[#1A1A1A] transition-colors py-2"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
