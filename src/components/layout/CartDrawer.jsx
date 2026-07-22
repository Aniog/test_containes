import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeItem, subtotal, itemCount } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isDrawerOpen, items.length]);

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-[60] transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] animate-slide-in-right shadow-2xl flex flex-col" ref={drawerRef}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <h2 className="font-serif text-lg tracking-wider">
            YOUR BAG ({itemCount})
          </h2>
          <button onClick={closeDrawer} className="p-1 text-velmora-charcoal hover:text-velmora-golddark transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-velmora-taupe text-sm">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="mt-4 btn-outline text-xs"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-velmora-sand">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="py-5 flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0 relative overflow-hidden">
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-${item.id}-${item.variant}-m3n4`}
                      data-strk-img={`[cart-item-name-${item.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="120"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h3 id={`cart-item-name-${item.id}`} className="font-serif text-xs tracking-widest uppercase">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-velmora-taupe mt-0.5">{item.variant}</p>
                      </div>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-sand">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-velmora-golddark transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs min-w-[28px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-velmora-golddark transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-velmora-taupe hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-sand px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-velmora-taupe">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-velmora-taupe">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-xs">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-center text-xs text-velmora-taupe underline underline-offset-4 hover:text-velmora-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
