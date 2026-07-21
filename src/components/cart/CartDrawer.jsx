import React, { useEffect, useRef } from 'react';
import { useCartStore } from '../../store/cartStore';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';

const strkImgConfig = {};

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen && ImageHelper && typeof ImageHelper.loadImages === 'function') {
      // Need a small timeout to allow drawer animation to start and DOM to be fully ready
      const timer = setTimeout(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div 
        ref={containerRef}
        className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl z-50 transform transition-transform duration-300 flex flex-col border-l border-border"
      >
        
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Bag ({items.length})</h2>
          <button onClick={closeCart} className="p-2 hover:opacity-70 transition-opacity">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>Your bag is currently empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 border-b border-foreground text-foreground hover:text-primary hover:border-primary transition-colors uppercase tracking-widest text-sm pb-1"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
{items.map((item, i) => (
                <div key={`${item.id}-${i}`} className="flex gap-4">
                  <div className="w-24 aspect-[3/4] bg-muted relative overflow-hidden bg-cover bg-center flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-xs text-center px-2">{item.name} image</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <div 
                          className="font-serif uppercase tracking-wider text-sm block"
                          id={`c-n-${item.id}-${i}`}
                        >
                          <Link 
                            to={`/product/${item.id}`} 
                            onClick={closeCart}
                            className="hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">${item.price}</p>
                      {item.variant && <p className="text-xs text-muted-foreground">Color: {item.variant}</p>}
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-lg">Subtotal</span>
              <span className="font-serif text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 font-sans tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}