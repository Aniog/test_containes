import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-background shadow-2xl animate-in slide-in-from-right duration-500">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-border">
            <h2 className="text-[11px] uppercase-extra font-semibold">Shopping Bag ({cartItems.length})</h2>
            <button onClick={() => setIsCartOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <ShoppingBag className="w-12 h-12 opacity-20 mb-4" />
                <p className="font-serif italic opacity-40 mb-8">Your bag is empty.</p>
                <Link 
                  to="/collections" 
                  onClick={() => setIsCartOpen(false)}
                  className="bg-primary text-white text-[10px] uppercase-extra px-8 py-3"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 aspect-[3/4] overflow-hidden bg-secondary">
                    <img
                      data-strk-img-id="cart-item-image"
                      data-strk-img="gold jewelry product shot"
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <h3 className="text-[10px] uppercase-extra font-medium">{item.name}</h3>
                      <p className="text-sm font-serif">${item.price}.00</p>
                    </div>
                    <p className="text-[10px] opacity-40 uppercase-widest mb-4">{item.variant}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="p-2 hover:text-accent transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="p-2 hover:text-accent transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-2 text-destructive opacity-40 hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-secondary/50 border-t border-border">
              <div className="flex justify-between items-end mb-6">
                <span className="text-[10px] uppercase-extra">Subtotal</span>
                <span className="text-xl font-serif">${cartTotal}.00</span>
              </div>
              <p className="text-[10px] opacity-40 uppercase-widest mb-6 italic">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-primary text-white py-4 text-[11px] uppercase-extra hover:bg-accent transition-colors">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
