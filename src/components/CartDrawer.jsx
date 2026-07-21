import React, { useRef, useEffect } from 'react';
import { useCart } from '@/lib/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const rid = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(rid);
    }
  }, [isCartOpen, cart]);

  if (!isCartOpen) return null;

  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-[2px] animate-in fade-in duration-300"
      />
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
      >
        <div className="p-6 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <h2 className="font-serif text-xl tracking-wide uppercase">Shopping Bag</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:opacity-50 transition-opacity">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-6 text-center">
              <p className="font-serif text-lg italic text-muted-foreground underline underline-offset-8 decoration-border/50">Your bag is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="premium-button w-full"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 group">
                  <div className="w-24 h-32 bg-muted overflow-hidden flex-shrink-0 relative">
                    <img 
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                      data-strk-img={`[cart-item-${item.id}-title]`}
                      data-strk-img-id={`cart-img-${item.id}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      alt={item.data?.name || item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h3 id={`cart-item-${item.id}-title`} className="font-serif text-sm uppercase tracking-wider">
                        {item.data?.name || item.name}
                      </h3>
                      <span className="text-sm font-sans font-medium">
                        {formatPrice(item.data?.price || item.price)}
                      </span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                      Tone: {item.variant || 'Gold'}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-[10px] uppercase tracking-widest text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-muted/30">
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground text-left">Subtotal</span>
              <span className="font-serif text-xl">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider text-center mb-6">
              Shipping and taxes calculated at checkout
            </p>
            <button className="premium-button w-full py-4 tracking-[0.3em]">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
