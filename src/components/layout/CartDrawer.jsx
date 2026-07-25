import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && cartItems.length > 0) {
      window.requestAnimationFrame(() => {
        setTimeout(() => {
          try {
            if (strkImgConfig && drawerRef.current) {
              ImageHelper.loadImages(strkImgConfig, drawerRef.current);
            }
          } catch (e) {}
        }, 0);
      });
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-velmora-ink/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div ref={drawerRef} className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background text-foreground z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">

        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Bag</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
          >
            <X size={24} className="stroke-[1.5]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <p className="text-muted-foreground text-lg">Your bag is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-foreground text-background px-8 py-3 tracking-widest text-sm uppercase hover:bg-velmora-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.variant || 'default'}`} className="flex gap-4">
                {/* Image */}
                <div className="w-24 h-24 bg-secondary overflow-hidden shrink-0">
                  <img 
                    src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                    className="w-full h-full object-cover"
                    data-strk-img-id={item.cartImg}
                    data-strk-img={`[cart-item-title-${item.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    alt={item.name}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 id={`cart-item-title-${item.id}`} className="font-serif text-lg leading-tight uppercase tracking-wider">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-muted-foreground text-sm mt-1">{item.variant}</p>
                      )}
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex justify-between items-end">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 bg-background space-y-6">
            <div className="flex justify-between items-end font-serif text-xl border-b border-border pb-4">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-foreground text-background py-4 flex items-center justify-center gap-2 tracking-widest text-sm uppercase hover:bg-velmora-gold transition-colors">
              Checkout <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
