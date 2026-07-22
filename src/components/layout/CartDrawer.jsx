import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../../strk-img-config.json';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    let frameId;
    if (isCartOpen && drawerRef.current) {
        frameId = window.requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        });
    }
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-velmora-900/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      
      <div 
        ref={drawerRef}
        className={cn(
        "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-velmora-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isCartOpen ? "translate-x-0" : "translate-x-full"
      )}>
        
        <div className="flex items-center justify-between p-6 border-b border-velmora-200">
          <h2 className="font-serif text-2xl uppercase tracking-widest text-velmora-900">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-velmora-500 hover:text-velmora-900 transition-colors"
            aria-label="Close cart"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 border rounded-full flex items-center justify-center text-velmora-300 mb-4">
                <Lock size={24} strokeWidth={1} />
              </div>
              <p className="font-serif text-xl tracking-wide text-velmora-600">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn-primary mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-8">
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-velmora-200 flex-shrink-0 relative overflow-hidden">
                     <img
                        key={`${item.imgId}-cart`}
                        alt={item.name}
                        data-strk-img-id={`${item.imgId}-cart`}
                        data-strk-img={`[${item.id}-desc] [${item.id}-title] jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="300"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                  </div>
                  
                  <div className="flex flex-col flex-1 pb-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 id={`${item.id}-title`} className="font-serif text-lg tracking-wide uppercase text-velmora-900 mb-1">
                          <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)} className="hover:text-gold-dark transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p id={`${item.id}-desc`} className="text-sm text-velmora-500 font-light mb-3">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-velmora-400 hover:text-red-500 transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="mt-auto flex justify-between items-end border-t border-velmora-200 pt-3">
                      <div className="flex items-center border border-velmora-300">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-3 py-1 text-velmora-600 hover:bg-velmora-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-3 py-1 text-velmora-600 hover:bg-velmora-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-velmora-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-velmora-200 p-6 bg-white shrink-0">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-lg tracking-wider text-velmora-600">Subtotal</span>
              <span className="font-serif text-2xl tracking-wider text-velmora-900">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-500 text-center mb-6 font-light">
              Taxes and shipping calculated at checkout.
            </p>
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <Lock size={16} /> Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}