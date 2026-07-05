import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/store';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl uppercase tracking-widest">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={24} className="text-primary hover:opacity-60 transition-opacity" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <p className="font-serif text-lg text-muted italic">Your bag is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-xs uppercase tracking-extrawide underline underline-offset-4"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex space-x-4 border-b border-border pb-6 last:border-0">
                <div className="w-24 h-32 bg-secondary/20 flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-sm uppercase tracking-widest font-medium">
                        {item.name}
                      </h3>
                      <button onClick={() => removeFromCart(item.id, item.variant)}>
                        <Trash2 size={14} className="text-muted hover:text-red-500 transition-colors" />
                      </button>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted mt-1">
                      Tone: {item.variant}
                    </p>
                    <p className="text-sm mt-2 font-medium">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center border border-border w-fit">
                    <button
                      className="p-1 hover:text-accent transition-colors"
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                    <button
                      className="p-1 hover:text-accent transition-colors"
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-secondary/5 border-t border-border space-y-4">
            <div className="flex justify-between items-center px-2">
              <span className="text-xs uppercase tracking-widest text-muted">Subtotal</span>
              <span className="font-medium text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-center text-muted uppercase tracking-widest pb-2">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-primary text-white py-4 text-xs uppercase tracking-extrawide hover:bg-accent transition-colors">
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
