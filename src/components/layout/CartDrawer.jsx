import React, { useEffect, useRef } from 'react';
import { useCartStore } from '@/store/cartStore';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeItem } = useCartStore();
  const drawerRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, items]);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="relative w-full max-w-md bg-background flex flex-col shadow-2xl animate-in slide-in-from-right"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl tracking-widest uppercase">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-foreground/70 hover:text-foreground">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} className="text-muted-foreground/30" strokeWidth={1} />
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-foreground px-6 py-3 uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, idx) => (
                <div key={`${item.product.id}-${item.variant}-${idx}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-secondary flex-shrink-0 relative overflow-hidden">
                    <img 
                      src={
                        strkImgConfig[`shop-${item.product.imgId}`]?.picked 
                          ? strkImgConfig[`shop-${item.product.imgId}`]?.results?.find(r => r.id === strkImgConfig[`shop-${item.product.imgId}`].picked)?.url 
                          : strkImgConfig[`shop-${item.product.imgId}`]?.results?.[0]?.url 
                          || ''
                      }
                      alt={item.product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 id={`cart-item-title-${item.product.id}`} className="text-sm tracking-wider uppercase mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-muted-foreground capitalize">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.product.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground p-1 -mt-1 -mr-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    
                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-3 py-1 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-serif text-lg">${item.product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-muted/30">
            <div className="flex justify-between items-center mb-6">
              <span className="uppercase tracking-widest text-sm font-medium">Subtotal</span>
              <span className="font-serif text-xl border-b border-background">${total}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
