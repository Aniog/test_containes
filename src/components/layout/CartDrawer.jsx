import React, { useEffect, useRef } from 'react';
import { useStore } from '@/store';
import { X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity } = useStore();
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    } catch(e) {
      console.log('Image helper not loaded properly yet', e);
    }
  }, [isCartOpen, cart]);

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />
      <div 
        className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-xl z-50 flex flex-col animate-in slide-in-from-right duration-300"
        ref={containerRef}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-medium font-serif">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:bg-secondary rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-muted-foreground">
              <p>Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="text-primary border-b border-primary hover:text-accent-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary flex-shrink-0">
                    <img 
                      src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      data-strk-img={`[cart-item-${item.id}]`}
                      data-strk-img-id={`cart-thumb-${item.id}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-serif text-lg tracking-wide uppercase" id={`cart-item-${item.id}`}>{item.name}</h3>
                        {item.variant && <p className="text-sm text-muted-foreground mt-1">{item.variant}</p>}
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-3 py-1 hover:bg-secondary transition-colors disabled:opacity-50"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.variant)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium text-lg">${total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;