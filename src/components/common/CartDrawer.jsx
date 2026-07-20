import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, subtotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={containerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl transition-transform duration-500 ease-in-out',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-2xl uppercase tracking-widest">Your Bag</h2>
            <button onClick={() => setIsCartOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <p className="text-neutral-500 font-serif text-lg italic">Your bag is currently empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-brand-onyx text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-accent transition-colors"
                >
                  Shop Now
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-neutral-100 flex-shrink-0">
                    <img
                      src={item.data.images?.[0] || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-item-name-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      alt={item.data.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-item-name-${item.id}`} className="font-serif text-lg uppercase tracking-wider">{item.data.name}</h3>
                        <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-sm text-neutral-500">{item.data.category}</p>
                      <p className="font-bold">${item.data.price}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-neutral-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-neutral-50"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-neutral-50"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t space-y-6">
              <div className="flex justify-between items-center font-bold text-lg">
                <span className="uppercase tracking-widest">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-neutral-500 text-center uppercase tracking-widest">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-brand-onyx text-white py-4 uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
