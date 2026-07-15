import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const getCartImageUrl = (imgId) => {
  try {
    const cfg = strkImgConfig[`${imgId}-main`];
    if (cfg && cfg.results && cfg.results.length > 0) {
      const picked = cfg.results.find(r => r.id === cfg.picked);
      if (picked) return picked.url;
      return cfg.results[0].url;
    }
  } catch (err) {
    console.error(err);
  }
  return "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
};

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    // If strkImgConfig is present we would load images. For cart items we might just use placeholder or strk img
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="relative w-full max-w-md bg-velmora-bg h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-velmora-bg z-10 sticky top-0 border-b border-border/50">
          <h2 className="text-2xl tracking-widest uppercase">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:bg-velmora-light rounded-full transition-colors text-velmora-text">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center h-full text-velmora-text/60">
              <p className="mb-4">Your cart is empty.</p>
              <button onClick={closeCart} className="px-6 py-3 border border-velmora-text hover:bg-velmora-light transition-colors tracking-widest uppercase text-sm">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 p-4 border border-border/50 rounded-sm">
                  {/* Image */}
                  <div className="w-24 h-32 bg-velmora-light shrink-0 relative overflow-hidden flex items-center justify-center">
                     <img 
                        src={getCartImageUrl(item.imgId)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                     />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 id={`cart-item-name-${item.id}`} className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                        <p className="text-sm text-velmora-text/70 mt-1">{item.variant} Tone</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-velmora-text/40 hover:text-velmora-text p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <div className="flex items-center border border-border/80">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-velmora-text/60 hover:bg-velmora-light"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm select-none">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-velmora-text/60 hover:bg-velmora-light"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border/50 p-6 bg-velmora-bg/95 backdrop-blur-md pb-8">
            <div className="flex justify-between items-center mb-6 font-medium">
              <span className="text-lg">Subtotal</span>
              <span className="text-xl">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-text/60 mb-4 whitespace-normal">Taxes and shipping calculated at checkout.</p>
            <button className="w-full py-4 bg-velmora-accent hover:bg-velmora-accent-hover text-white transition-colors uppercase tracking-widest font-medium">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}