import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div ref={drawerRef} className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-50 animate-slide-in-right shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
          <h2 className="font-serif text-xl text-brand-dark">Your Bag</h2>
          <button onClick={closeCart} className="p-1 text-brand-muted hover:text-brand-dark transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-muted">Your bag is empty</p>
              <p className="text-sm text-brand-muted mt-2">Discover something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-warm rounded-sm flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs font-medium uppercase tracking-ultra-wide text-brand-dark">{item.name}</h3>
                    <p className="text-xs text-brand-muted mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm text-brand-dark mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-border text-brand-muted hover:text-brand-dark transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-dark w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-border text-brand-muted hover:text-brand-dark transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-dark underline transition-colors"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm uppercase tracking-wide text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg text-brand-dark">${totalPrice}</span>
            </div>
            <p className="text-xs text-brand-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-white font-sans text-xs uppercase tracking-super-wide py-3.5 hover:bg-brand-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
