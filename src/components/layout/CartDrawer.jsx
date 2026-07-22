import React, { useEffect, useRef } from 'react';
import { useStore } from '../../store/useStore';
import { X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cart, removeFromCart, updateQuantity } = useStore();
  const drawerRef = useRef(null);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity" 
        onClick={closeCart}
      />
      <div ref={drawerRef} className="fixed top-0 right-0 h-full w-[400px] max-w-[100vw] bg-background z-50 flex flex-col shadow-xl animate-in slide-in-from-right">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="font-serif text-xl tracking-wider uppercase">Your Cart</h2>
          <button onClick={closeCart} className="hover:text-primary transition-colors">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted">
              <p>Your cart is currently empty.</p>
              <button 
                onClick={closeCart}
                className="text-primary hover:text-foreground transition-colors uppercase tracking-widest text-sm pb-1 border-b border-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary shrink-0 relative bg-cover bg-center overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}`}
                      data-strk-img={`[prod-name-${item.id}] minimalist jewelry photography white background`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="150"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply" /> {/* Subtle contrast enhancer */}
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link to={`/product/${item.id}`} onClick={closeCart} id={`prod-name-${item.id}`} className="font-serif uppercase tracking-wider text-sm hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                        <span className="text-sm">${item.price}</span>
                      </div>
                      <p className="text-sm text-muted mt-1 capitalize">{item.variant}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 border border-gray-200 p-1 w-24">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="px-2 hover:text-primary transition-colors disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="px-2 hover:text-primary transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="text-muted hover:text-foreground transition-colors h-fit p-1"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-background space-y-4">
            <div className="flex justify-between font-serif text-lg py-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-foreground transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;