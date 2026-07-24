import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';

const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-500",
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[101] transition-transform duration-500 transform flex flex-col shadow-2xl",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-6 md:p-8 flex justify-between items-center border-b border-velmora-charcoal/5">
          <h2 className="font-serif text-2xl tracking-widest-lg uppercase">Shopping Bag ({cartItems.length})</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-40 font-sans">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <p className="uppercase tracking-widest-lg">Your bag is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-6">
                <div className="w-24 h-32 bg-velmora-stone relative overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image_url} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3 className="font-serif text-lg tracking-wide uppercase">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="opacity-40 hover:opacity-100 transition-opacity">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-sans text-sm opacity-60 mb-4">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-velmora-charcoal/10 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-velmora-charcoal/5 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-velmora-charcoal/5 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 md:p-8 border-t border-velmora-charcoal/5 bg-velmora-cream/50">
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans uppercase text-sm tracking-widest-lg">Subtotal</span>
              <span className="font-serif text-xl tracking-wide">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest-lg opacity-40 mb-8 font-sans">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-premium">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
