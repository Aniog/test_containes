import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <div className={cn(
      "fixed inset-0 z-[100] transition-all duration-500",
      isCartOpen ? "visible" : "invisible"
    )}>
      {/* Overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0"
        )} 
        onClick={() => setIsCartOpen(false)}
      />

      {/* Panel */}
      <div className={cn(
        "absolute right-0 top-0 h-full bg-background w-full max-w-md shadow-2xl transition-transform duration-500 ease-in-out flex flex-col",
        isCartOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center p-8 border-b border-border">
          <div className="flex items-center gap-3">
            <h2 className="uppercase-spaced text-[10px] font-bold">Shopping Bag</h2>
            <span className="text-[10px] bg-accent text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="hover:text-accent transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-6">
              <div className="p-8 bg-muted rounded-full">
                <ShoppingBag className="w-12 h-12 text-muted-foreground/40" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-2xl">Your bag is empty</h3>
                <p className="text-sm text-muted-foreground font-light px-8">
                  It looks like you haven't added anything to your bag yet.
                </p>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-foreground text-white px-10 py-4 uppercase-spaced text-xs font-bold hover:bg-accent transition-luxury"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.material}`} className="flex gap-6">
                  <div className="w-24 aspect-[3/4] bg-muted overflow-hidden">
                    <img 
                      data-strk-img-id={`cart-img-${item.id}`}
                      data-strk-img={`jewelry ${item.data.name}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      className="w-full h-full object-cover"
                      alt={item.data.name}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <h4 className="uppercase-spaced text-[10px] font-bold tracking-widest leading-relaxed">
                        {item.data.name}
                      </h4>
                      <button 
                        onClick={() => removeFromCart(item.id, item.material)}
                        className="text-muted-foreground hover:text-accent"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-[9px] text-muted-foreground uppercase-spaced">{item.material}</span>
                    <span className="text-sm font-light mt-1">${item.data.price}</span>
                    
                    <div className="flex items-center border border-border mt-3 w-fit h-8">
                      <button 
                         onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                         className="px-3 hover:text-accent transition-colors"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                      <button 
                         onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                         className="px-3 hover:text-accent transition-colors"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-border bg-muted/20">
            <div className="flex justify-between items-center mb-4">
              <span className="uppercase-spaced text-[10px] font-bold">Subtotal</span>
              <span className="text-xl font-light">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase-spaced text-center mb-8">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-foreground text-white py-5 uppercase-spaced text-xs font-bold hover:bg-accent transition-luxury flex items-center justify-center gap-3 group">
              Checkout
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
