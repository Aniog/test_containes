import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300",
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      <div 
        className={cn(
          "fixed top-0 right-0 w-full max-w-md h-full bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-xl font-serif uppercase tracking-widest">Your Bag</h2>
            <button onClick={() => setIsCartOpen(false)} className="p-1 hover:rotate-90 transition-transform duration-300">
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 opacity-60">
                <ShoppingBag size={48} strokeWidth={1} />
                <p className="font-serif">Your bag is empty</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-sm uppercase tracking-widest underline underline-offset-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="w-24 h-32 bg-brand-stone flex-shrink-0">
                      <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`${item.name} jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm font-serif uppercase tracking-widest">{item.name}</h3>
                          <p className="text-sm">${item.price}</p>
                        </div>
                        <p className="text-xs text-black/50 mt-1 capitalize">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-black/10 rounded-full px-2">
                          <button 
                            className="p-1"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button 
                            className="p-1"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] uppercase tracking-widest underline underline-offset-4 opacity-40 hover:opacity-100"
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

          {cart.length > 0 && (
            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between items-center bg-brand-stone p-4">
                <span className="text-sm uppercase tracking-widest">Subtotal</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-center text-black/40">Shipping and taxes calculated at checkout</p>
              <button className="w-full bg-brand-dark text-white py-4 uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors duration-500">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
