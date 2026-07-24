import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [cart]);

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity" 
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        ref={containerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col items-center",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border text-foreground w-full">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 w-full">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-serif text-xl">Your cart is empty.</p>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2 bg-foreground text-background font-medium tracking-wide uppercase text-sm hover:bg-primary transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.tone}`} className="flex gap-4 items-start w-full">
                <div className="w-24 h-24 bg-secondary shrink-0 overflow-hidden outline outline-1 outline-border relative flex items-center justify-center">
                  <span id={`cart-item-${item.id}-${item.tone}-name`} className="hidden">{item.name} {item.category}</span>
                  <img
                    alt={item.name}
                    data-strk-img-id={`cart-thumb-${item.id}-${item.tone}`}
                    data-strk-img={`[cart-item-${item.id}-${item.tone}-name] preview style`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover shrink-0"
                  />
                </div>
                <div className="flex-1 flex flex-col pt-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-serif uppercase tracking-widest text-sm text-foreground">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id, item.tone)} className="text-muted-foreground hover:text-foreground">
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1 capitalize pr-4">{item.tone} Tone</p>
                  <p className="text-foreground tracking-wider mt-2">${item.price}</p>
                  
                  <div className="mt-3 flex items-center border border-border w-fit text-foreground">
                    <button 
                      onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                      className="px-2 py-1 hover:bg-secondary"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-2 text-sm w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                      className="px-2 py-1 hover:bg-secondary"
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
          <div className="p-6 border-t border-border bg-background flex flex-col gap-4 text-foreground w-full">
            <div className="flex justify-between items-center font-serif text-xl">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-muted-foreground text-xs text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;