import React, { useRef, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const drawerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed right-0 top-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full bg-secondary/30" ref={containerRef}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
            <h2 className="brand-title text-lg">Your Bag</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                <ShoppingBag className="w-12 h-12 stroke-1" />
                <p className="font-light tracking-wide">Your bag is currently empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="brand-title text-sm underline underline-offset-4"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex space-x-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="w-24 h-32 bg-secondary flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-item-title-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 id={`cart-item-title-${item.id}`} className="brand-title text-xs mb-1">{item.name}</h3>
                      <p className="text-sm font-light text-muted-foreground">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 px-2 border-r border-border hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 px-2 border-l border-border hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Trash2 className="w-4 h-4 stroke-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 bg-background border-t border-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-light tracking-wide uppercase">Subtotal</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-muted-foreground tracking-wide uppercase text-center">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-primary text-primary-foreground py-4 brand-title text-sm hover:opacity-90 transition-opacity">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
