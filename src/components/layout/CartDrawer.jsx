import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { ImageHelper } from '@/lib/sdk_mock';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        className={cn(
          "fixed right-0 top-0 h-full w-full max-w-[450px] bg-background z-[101] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-serif">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:opacity-70">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6" ref={containerRef}>
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <p className="text-muted-foreground uppercase tracking-widest text-xs">Your bag is empty</p>
              <button 
                onClick={() => { setIsCartOpen(false); navigate('/shop'); }}
                className="text-sm font-medium underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex space-x-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-24 h-32 bg-secondary shrink-0 overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`cart-img-${item.id}`}
                    data-strk-img={`[cart-item-name-${item.id}] [cart-item-desc-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 id={`cart-item-name-${item.id}`} className="text-sm font-serif uppercase tracking-widest leading-tight pr-4">
                        {item.name}
                      </h3>
                      <p className="text-sm font-medium">$${item.price}</p>
                    </div>
                    <p id={`cart-item-desc-${item.id}`} className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                      {item.category}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-[10px] font-medium px-2">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between text-base font-medium">
              <span>Subtotal</span>
              <span>$${cartTotal}</span>
            </div>
            <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full bg-accent text-accent-foreground py-4 text-xs uppercase tracking-ultra-wide font-medium hover:opacity-90 transition-opacity">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
