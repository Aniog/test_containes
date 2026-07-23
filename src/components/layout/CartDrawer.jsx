import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, Info } from 'lucide-react';
import { useCart } from '../../store/CartContext';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
         ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      ></div>

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div ref={drawerRef} className="w-screen max-w-md bg-background shadow-xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-border">
            <h2 id="cart-title" className="text-lg font-serif">Your Cart</h2>
            <button 
              onClick={closeCart}
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground border-0 bg-transparent">
                <p>Your cart is empty.</p>
                <Link 
                  to="/collections" 
                  onClick={closeCart}
                  className="bg-foreground text-background px-6 py-2 uppercase tracking-wide text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={item.key} className="flex gap-4 border-0 bg-transparent">
                  {/* Item Image */}
                  <div className="w-20 h-24 bg-muted overflow-hidden flex-shrink-0 border-0 bg-transparent">
                    {index === 0 && (
                      <img 
                        data-strk-img-id="cart-img-0"
                        data-strk-img="[cart-title] gold jewelry"
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        data-strk-img-id="cart-img-1"
                        data-strk-img="[cart-title] elegant jewelry"
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === 2 && (
                      <img 
                        data-strk-img-id="cart-img-2"
                        data-strk-img="[cart-title] luxury accessories"
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index === 3 && (
                      <img 
                        data-strk-img-id="cart-img-3"
                        data-strk-img="[cart-title] fine gold pieces"
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {index > 3 && (
                      <div className="w-full h-full bg-muted"></div>
                    )}
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex-1 flex flex-col border-0 bg-transparent">
                    <div className="flex justify-between border-0 bg-transparent">
                      <h3 className="font-serif text-sm leading-tight text-foreground pr-4 border-0 bg-transparent">
                        {item.name}
                      </h3>
                      <button 
                        onClick={() => removeFromCart(item.key)}
                        className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-2 border-0 bg-transparent"
                      >
                        Remove
                      </button>
                    </div>
                    {item.variant && (
                      <p className="text-xs text-muted-foreground mt-1 capitalize border-0 bg-transparent">{item.variant}</p>
                    )}
                    
                    <div className="mt-auto flex items-center justify-between border-0 bg-transparent">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-border w-fit border-solid bg-transparent">
                        <button 
                          onClick={() => updateQuantity(item.key, -1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground border-0 bg-transparent"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm border-0 bg-transparent">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.key, 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground border-0 bg-transparent"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium border-0 bg-transparent text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-border p-6 bg-background border-solid">
              <div className="flex justify-between text-base font-medium mb-4 text-foreground border-0 bg-transparent">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6 flex items-center gap-1 border-0 bg-transparent">
                <Info className="w-3 h-3" /> Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-accent text-accent-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors border-0">
                Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
