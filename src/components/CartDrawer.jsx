import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (isCartOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isCartOpen, cart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}>
      <div
        ref={containerRef}
        className="fixed inset-y-0 right-0 w-full max-w-md bg-parchment shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-stone-muted flex items-center justify-between">
          <h2 className="text-xl font-serif">Your Bag ({cart.length})</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-500">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
              <p className="font-serif italic text-lg">Your bag is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-8 py-3 border border-obsidian text-sm tracking-widest uppercase hover:bg-obsidian hover:text-white transition-all"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 group">
                  <div className="w-24 h-32 bg-stone-muted shrink-0 overflow-hidden relative">
                    <img
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-item-name-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.data.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between">
                        <h3 id={`cart-item-name-${item.id}`} className="font-medium text-sm tracking-wide uppercase">
                          {item.data.name}
                        </h3>
                        <button onClick={() => removeFromCart(item.id, item.variant)} className="text-stone-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-stone-500 text-xs mt-1">{item.variant} Tone</p>
                      <p className="font-serif mt-2">{formatPrice(item.data.price)}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-stone-muted">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 hover:bg-stone-muted transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 hover:bg-stone-muted transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-8 border-t border-stone-muted bg-stone-50/50">
            <div className="flex justify-between mb-4">
              <span className="font-medium tracking-wide uppercase text-sm">Subtotal</span>
              <span className="font-serif text-lg">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-stone-500 text-xs mb-6 italic">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-obsidian text-white py-4 tracking-[0.2em] font-medium hover:bg-gold transition-all duration-500">
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
