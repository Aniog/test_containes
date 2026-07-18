import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && containerRef.current) {
      document.body.style.overflow = 'hidden';
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => {
        window.cancelAnimationFrame(frameId);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        aria-hidden="true"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div 
          className="w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 translate-x-0"
          ref={containerRef}
        >
          <div className="h-full flex flex-col bg-background shadow-xl">
            
            {/* Header */}
            <div className="flex-shrink-0 px-4 py-6 sm:px-6 border-b border-border flex items-center justify-between">
              <h2 className="font-serif text-2xl uppercase tracking-wider text-foreground" id="slide-over-title">
                Your Cart
              </h2>
              <div className="ml-3 h-7 flex items-center">
                <button
                  type="button"
                  className="bg-transparent rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
                  onClick={() => setIsCartOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <X className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Cart items */}
            <div className="flex-1 min-h-0 overflow-y-auto px-4 py-6 sm:px-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground" strokeWidth={1} />
                  <p className="text-lg text-muted-foreground font-serif italic">Your cart is currently empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 uppercase tracking-widest text-sm border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul role="list" className="-my-6 divide-y divide-border">
                  {cartItems.map((item, index) => (
                    <li key={`${item.id}-${index}`} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border border-border bg-secondary overflow-hidden flex items-center justify-center text-xs text-muted-foreground text-center p-2">
                        {/* We use a static div to avoid dynamic template issues with cart images since they can't be mapped at build time, and we already loaded them on the PDP/Product Grid */}
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          Item: {item.name}
                        </div>
                      </div>

                      <div className="ml-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between text-base font-medium text-foreground">
                            <h3 id={`cart-item-name-${item.id}`} className="font-serif uppercase tracking-wider text-sm">
                              <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>
                                {item.name}
                              </Link>
                            </h3>
                            <p className="ml-4">${item.price.toFixed(2)}</p>
                          </div>
                          {item.options && item.options.color && (
                            <p className="mt-1 text-sm text-muted-foreground italic">Tone: {item.options.color}</p>
                          )}
                        </div>
                        
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center border border-border">
                            <button 
                              className="p-1 text-muted-foreground hover:text-foreground"
                              onClick={() => updateQuantity(item.id, item.options, item.quantity - 1)}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-1 font-medium">{item.quantity}</span>
                            <button 
                              className="p-1 text-muted-foreground hover:text-foreground"
                              onClick={() => updateQuantity(item.id, item.options, item.quantity + 1)}
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-muted-foreground hover:text-foreground text-xs uppercase tracking-wider underline-offset-4 hover:underline"
                              onClick={() => removeFromCart(item.id, item.options)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="border-t border-border px-4 py-6 sm:px-6 bg-secondary/30">
                <div className="flex justify-between text-base font-medium text-foreground mb-4">
                  <p className="font-serif italic text-lg">Subtotal</p>
                  <p>${cartTotal.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex justify-center items-center px-6 py-4 border border-transparent rounded-none shadow-sm text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 uppercase tracking-widest transition-colors w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Checkout functionality would be implemented here.");
                    }}
                  >
                    Checkout
                  </a>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
