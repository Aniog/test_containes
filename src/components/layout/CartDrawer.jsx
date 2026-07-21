import React, { useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '../../lib/utils.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import productsData from '../../data.json';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      // Render images when cart opens
      const frameId = window.requestAnimationFrame(() => {
        if (drawerRef.current) {
             ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        }
      });
      return () => {
         document.body.style.overflow = '';
         window.cancelAnimationFrame(frameId);
      }
    } else {
      document.body.style.overflow = '';
    }
  }, [isCartOpen, cartItems]); // Also re-render images if items change while open

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div 
        ref={drawerRef}
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full md:w-[400px] bg-background shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out font-sans",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-serif">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12 stroke-1" />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2 border border-border text-foreground hover:bg-muted transition-colors rounded-none"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {productsData.products.map((product) => {
                const item = cartItems.find((i) => i.id === product.id);
                if (!item) return null;
                return (
                <li key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-muted flex-shrink-0 relative overflow-hidden">
                    <img 
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      data-strk-img-id={product.imageCart}
                      data-strk-img={product.imageQuery || ""}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="200"
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium tracking-wide uppercase font-serif" id={`cart-title-${item.id}`}>{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-1">${item.price}</p>
                    
                    <div className="mt-auto flex items-center gap-3 border border-border w-fit">
                      <button 
                        className="p-1.5 hover:bg-muted transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                         className="p-1.5 hover:bg-muted transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </li>
                );
              })}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-6 bg-background space-y-4">
            <div className="flex justify-between text-lg font-serif">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-accent text-accent-foreground py-3.5 font-medium hover:bg-accent/90 transition-colors uppercase tracking-widest text-sm rounded-none">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}