import React, { useRef, useEffect } from 'react';
import { X, Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
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
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-serif tracking-widest uppercase">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:opacity-60 transition-opacity">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <p className="font-serif italic text-muted">Your cart is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-primary text-white uppercase tracking-widest px-8 py-3 text-sm hover:bg-opacity-90 transition-all font-medium"
              >
                Shop Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.color}`} className="flex space-x-4">
                <div className="w-24 h-32 bg-secondary flex-shrink-0 relative">
                  <img
                    data-strk-img-id="cart-item-image"
                    data-strk-img="[item-title] jewelry gold"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 id="item-title" className="font-serif uppercase tracking-wider text-sm">{item.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.id, item.color)}
                      className="text-muted hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted mb-2 uppercase">{item.color}</p>
                  <p className="text-sm mb-4">{formatPrice(item.price)}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-stone-200">
                      <button
                        onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                        className="p-1 hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-4 py-1 text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                        className="p-1 hover:bg-secondary transition-colors"
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

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t bg-stone-50 space-y-4">
            <div className="flex justify-between items-center font-serif text-lg">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-[10px] text-muted uppercase tracking-widest text-center">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-accent text-white py-4 uppercase tracking-widest text-sm hover:brightness-110 transition-all font-bold">
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
