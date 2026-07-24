import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, subtotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-500',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={containerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-serif uppercase tracking-widest">Shopping Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/30" />
              <p className="text-muted-foreground italic">Your bag is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-sm uppercase tracking-widest underline underline-offset-4 font-semibold"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-32 bg-stone-100 flex-shrink-0 relative overflow-hidden bg-muted">
        <img
          data-strk-img-id={item.data.imgId}
          data-strk-img={`[cart-item-name-${item.data.slug}] [cart-item-category-${item.data.slug}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.data.name}
          className="w-full h-full object-cover"
        />
                  <span id={`cart-item-name-${item.data.slug}`} className="hidden">{item.data.name}</span>
                  <span id={`cart-item-category-${item.data.slug}`} className="hidden">{item.data.category}</span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm uppercase tracking-widest font-semibold">{item.data.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-foreground">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{item.data.category}</p>
                    <p className="text-sm mt-2 font-medium">${item.data.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border px-2 py-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center px-2">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Subtotal</span>
              <span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-center text-muted-foreground px-4">
              Shipping, taxes, and discounts calculated at checkout.
            </p>
            <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-[0.2em] text-sm font-semibold hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
