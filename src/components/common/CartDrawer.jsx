import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-serif tracking-widest uppercase">Your Cart ({cart.length})</h2>
            <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                <ShoppingBag size={48} className="mb-4 opacity-20" />
                <p className="font-serif italic">Your cart is currently empty.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 text-xs tracking-widest uppercase underline decoration-accent underline-offset-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                  <div className="w-24 h-24 bg-stone-100 flex-shrink-0">
                    <img
                      src={item.data?.mainImage}
                      alt={item.data?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium uppercase tracking-wider">
                          {item.data?.name}
                        </h3>
                        <p className="text-sm font-medium">${item.data?.price}</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                        Tone: {item.variant}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 hover:text-accent"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 hover:text-accent"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between items-center text-lg font-serif">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-muted-foreground italic text-center">
                Taxes and shipping calculated at checkout.
              </p>
              <button className="w-full bg-primary text-primary-foreground py-4 uppercase text-xs tracking-[0.2em] hover:bg-primary/90 transition-colors">
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
