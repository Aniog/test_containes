import React, { useRef, useEffect } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();
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
      {/* Overlay */}
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
          'fixed top-0 right-0 h-full w-full max-w-md bg-parchment z-[70] transition-transform duration-500 shadow-2xl flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 flex justify-between items-center border-b border-velmora-divider">
          <h2 className="text-xl font-serif tracking-velmora uppercase">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6 text-charcoal hover:text-velmora-gold transition-colors" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8" ref={containerRef}>
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-charcoal/60 font-serif italic text-lg">Your bag is currently empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                <div className="w-24 h-32 bg-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    alt={item.name}
                    data-strk-img-id={`cart-img-${item.id}`}
                    data-strk-img={`[cart-item-name-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between">
                      <h3
                        id={`cart-item-name-${item.id}`}
                        className="text-xs uppercase font-medium tracking-velmora"
                      >
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-charcoal/40 hover:text-charcoal transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-charcoal/60 mt-1">{item.variant} Tone</p>
                    <p className="text-sm mt-2 font-medium">${item.price}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-velmora-divider">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-gray-50 transition-colors"
                      >
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
          <div className="p-6 border-t border-velmora-divider space-y-4 bg-white">
            <div className="flex justify-between items-center px-2">
              <span className="text-sm uppercase tracking-velmora font-medium">Subtotal</span>
              <span className="text-lg font-serif">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-center text-charcoal/40 uppercase tracking-widest px-4">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full btn-primary py-4">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
