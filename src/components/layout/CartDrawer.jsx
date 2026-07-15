import React, { useEffect, useRef } from 'react';
import { useCart } from '../../lib/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

const strkImgConfig = {};

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && cart.length > 0 && drawerRef.current) {
      // Small timeout to allow DOM to render new cart items before scanning
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-foreground underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="w-24 h-24 bg-secondary flex-shrink-0 relative overflow-hidden group">
                  <img 
                    src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    data-strk-img-id={`cart-thumb-${item.id}`}
                    data-strk-img={`[cart-title-${item.id}] close up jewelry on subtle background`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                  />
                </div>
                
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 id={`cart-title-${item.id}`} className="font-serif uppercase tracking-wider text-sm">{item.title}</h3>
                    {item.variant && <p className="text-muted-foreground text-sm mt-1">{item.variant}</p>}
                    <p className="mt-1">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-secondary transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-secondary transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-background">
            <div className="flex justify-between items-center mb-6 font-medium">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors uppercase tracking-widest text-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}