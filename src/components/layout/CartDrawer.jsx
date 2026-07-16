import React, { useEffect, useRef } from 'react';
import { useCart } from '../CartContext';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, updateQuantity, removeItem, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      // Load cart images
      try {
        const frameId = window.requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
      } catch (e) {}
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, items]);

  if (!isCartOpen) return null;

  return (
    <div ref={drawerRef}>
      <div 
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-card shadow-2xl z-50 transform transition-transform duration-300 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-serif">Your Bag</h2>
          <button onClick={closeCart} className="p-2 hover:bg-slate-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center text-muted-foreground mt-12">
              <p className="mb-4">Your bag is currently empty.</p>
              <Button onClick={closeCart} className="w-full">Continue Shopping</Button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-24 h-24 bg-secondary flex-shrink-0 relative overflow-hidden">
                  <img 
                    data-strk-img-id={`cart-item-${item.id}-${index}`}
                    data-strk-img={item.strkQueries?.[0] || ""}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between h-24">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.options?.tone && `${item.options.tone} Tone`}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.options)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.options, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.options, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-card">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-serif">Subtotal</span>
              <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <Button className="w-full h-14 text-lg">Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
}
