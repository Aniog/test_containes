import React, { useRef, useEffect } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => {
        window.cancelAnimationFrame(frameId);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="text-sm uppercase tracking-[0.2em] font-sans font-semibold">Shopping Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-stone-400 hover:text-stone-900 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-stone-400 font-serif italic text-lg">Your bag is empty</p>
              <Button variant="outline" onClick={() => setIsCartOpen(false)}>Start Shopping</Button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex space-x-4 animate-in fade-in slide-in-from-right-4">
                <div className="w-24 h-32 bg-stone-100 overflow-hidden">
                  <img
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`[cart-item-name-${item.id}] gold jewelry editorial close up`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 id={`cart-item-name-${item.id}`} className="text-xs uppercase tracking-widest font-sans font-semibold">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-stone-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-stone-500 font-sans italic">{item.variant}</p>
                    <p className="text-sm font-sans">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-4 border border-stone-200 w-fit px-2 py-1">
                    <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="text-stone-400 hover:text-stone-900">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-sans w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="text-stone-400 hover:text-stone-900">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-stone-50 border-t border-stone-200 space-y-4">
            <div className="flex justify-between items-center text-sm uppercase tracking-widest font-semibold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-stone-400 font-sans uppercase tracking-widest text-center">
              Shipping and taxes calculated at checkout
            </p>
            <Button className="w-full" size="lg">Checkout</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
