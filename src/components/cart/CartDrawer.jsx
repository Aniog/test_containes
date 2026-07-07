import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl transition-transform duration-300 ease-in-out px-6 py-8 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-between items-center mb-10 px-2">
          <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart ({cartCount})</h2>
          <button onClick={onClose} className="p-2 -mr-2 hover:rotate-90 transition-transform duration-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center space-y-4 text-center">
            <ShoppingBag className="w-12 h-12 text-muted/50 mb-2" />
            <p className="font-serif italic text-lg text-muted-foreground">Your jewelry box is empty.</p>
            <button
              onClick={onClose}
              className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-all"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto no-scrollbar space-y-8 px-2">
            {cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="w-24 aspect-[3/4] bg-secondary flex-shrink-0">
                  <img
                    data-strk-img-id={`cart-img-${item.id}`}
                    data-strk-img={`[cart-name-${item.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 id={`cart-name-${item.id}`} className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id, item.variant)}>
                      <Trash2 className="w-3.5 h-3.5 text-muted-foreground hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3">Tone: {item.variant}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center border border-muted px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                        className="p-1 hover:text-accent"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs">{item.quantity}</span>
                      <button 
                         onClick={() => updateQuantity(item.id, item.variant, 1)}
                         className="p-1 hover:text-accent"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-sm font-sans tracking-wide">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="border-t border-muted/30 pt-8 mt-auto space-y-4 px-2">
            <div className="flex justify-between text-sm uppercase tracking-widest font-medium">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-muted-foreground italic">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-foreground text-background py-4 text-sm uppercase tracking-widest hover:bg-black/90 transition-all font-medium">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
