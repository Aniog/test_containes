import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[60] p-8 overflow-y-auto ${isCartOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="heading-serif text-2xl tracking-[0.08em]">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-[#6B665F] text-center py-12">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-[#E5DFD3]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em]">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-1">{item.variant}</p>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-[#6B665F]">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center gap-3 border border-[#E5DFD3]">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} className="px-2 py-1">
                          <Minus size={14} />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="px-2 py-1">
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E5DFD3] pt-6">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn-primary w-full mb-3">
                Checkout
              </button>
              <p className="text-center text-xs text-[#6B665F] tracking-[0.05em]">
                Free worldwide shipping on orders over $75
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}