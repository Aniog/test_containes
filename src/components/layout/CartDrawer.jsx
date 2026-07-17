import React from 'react';
import { useCart } from '@/lib/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-500',
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={() => setIsCartOpen(false)}
      />
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-full max-w-md bg-white z-[101] shadow-xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-sm uppercase tracking-widest font-ui">Your Bag ({cart.length})</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
              <ShoppingBag className="w-12 h-12 mb-4 stroke-1" />
              <p className="text-xs uppercase tracking-widest">Your bag is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 text-xs uppercase tracking-widest border-b border-primary py-1"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-secondary flex-shrink-0">
                    <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 opacity-20" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xs uppercase tracking-wider font-semibold">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id)}>
                          <X className="w-4 h-4 text-muted" />
                        </button>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-muted mt-1">{item.category}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-border">
                        <button
                          className="px-2 py-1"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs">{item.quantity}</span>
                        <button
                          className="px-2 py-1"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-light">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-secondary/30">
            <div className="flex justify-between mb-4">
              <span className="text-xs uppercase tracking-widest">Subtotal</span>
              <span className="text-sm font-semibold">${cartTotal}</span>
            </div>
            <p className="text-[10px] text-muted mb-6">Shipping & taxes calculated at checkout.</p>
            <button className="w-full button-premium">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
