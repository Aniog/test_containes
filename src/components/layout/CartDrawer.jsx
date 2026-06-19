import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-brand-text/40 z-[60] transition-opacity duration-500 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-base z-[70] transition-transform duration-500 ease-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-text/10">
          <h2 className="text-sm uppercase tracking-widest font-semibold">Your Cart ({cart.length})</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-brand-text hover:text-brand-accent transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <p className="text-brand-neutral text-sm italic">Your cart is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-outline text-[10px]"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                <div className="w-24 h-32 bg-brand-neutral/10 relative overflow-hidden flex-shrink-0">
                  <img
                    data-strk-img-id={`cart-item-${item.id}-${item.variant}`}
                    data-strk-img={`[cart-item-name-${item.id}] [cart-item-category-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={item.data.name}
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  />
                  <div id={`cart-item-name-${item.id}`} className="hidden">{item.data.name}</div>
                  <div id={`cart-item-category-${item.id}`} className="hidden">{item.data.category}</div>
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-sm uppercase tracking-wide leading-tight px-1">{item.data.name}</h3>
                      <p className="text-xs font-medium">{formatCurrency(item.data.price)}</p>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-neutral mt-1">Tone: {item.variant}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-brand-text/10">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-brand-text hover:text-white transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-brand-text hover:text-white transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-brand-neutral hover:text-brand-text transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-brand-text/10 bg-brand-base">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold">Subtotal</span>
              <span className="text-sm font-medium">{formatCurrency(cartTotal)}</span>
            </div>
            <p className="text-[10px] text-brand-neutral mb-6 italic">Shipping and taxes calculated at checkout.</p>
            <button className="w-full btn-primary py-4">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
