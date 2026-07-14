import React, { useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { X, Plus, Minus, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();
  
  const drawerRef = useRef(null);

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, setIsCartOpen]);

  // Load images in cart
  useEffect(() => {
    let cleanup = undefined;
    if (isCartOpen && cartItems.length > 0 && drawerRef.current) {
        // give it a tiny delay to ensure DOM is updated
        setTimeout(() => {
           try {
             cleanup = ImageHelper.loadImages(strkImgConfig, drawerRef.current);
           } catch(e) {
             console.error(e);
           }
        }, 50);
    }
    return () => {
        if(cleanup) cleanup();
    }
  }, [isCartOpen, cartItems]);

  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={`absolute top-0 right-0 w-full md:w-[400px] h-full bg-background shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-border ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border bg-background z-10">
          <h2 className="font-serif tracking-widest text-xl uppercase">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Free shipping banner */}
        <div className="bg-secondary px-6 py-3 text-center text-xs tracking-widest uppercase font-medium">
          {cartTotal >= 100 
            ? "You've unlocked free shipping!"
            : `Add $${(100 - cartTotal).toFixed(2)} more for free shipping`}
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-muted-foreground font-serif text-lg mb-6">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-primary text-primary-foreground px-8 py-3 tracking-widest uppercase text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.option}`} className="flex gap-4 pb-6 border-b border-border">
                {/* Image */}
                <div className="relative w-20 h-24 bg-secondary flex-shrink-0">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    data-strk-img-id={`cart-${item.imgId}-${item.option.replace(/\s+/g, '-').toLowerCase()}`}
                    data-strk-img={`small thumbnail product shot of [cart-title-${item.id}-${item.option.replace(/\s+/g, '-').toLowerCase()}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="150"
                  />
                </div>
                
                {/* Details */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <Link 
                      to={`/product/${item.id}`} 
                      onClick={() => setIsCartOpen(false)}
                      className="font-serif tracking-wide text-sm hover:text-accent transition-colors block"
                      id={`cart-title-${item.id}-${item.option.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {item.name}
                    </Link>
                    <button 
                      onClick={() => removeFromCart(item.id, item.option)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-auto">{item.option}</p>
                  
                  <div className="flex justify-between items-end flex-wrap gap-2 pt-2">
                    <div className="flex items-center border border-border h-8 w-24">
                      <button 
                        onClick={() => updateQuantity(item.id, item.option, item.quantity - 1)}
                        className="w-1/3 h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-1/3 text-center text-xs font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.option, item.quantity + 1)}
                        className="w-1/3 h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 bg-background z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm uppercase tracking-widest font-medium">Subtotal</span>
              <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 tracking-widest uppercase text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
              <Lock size={14} className="mr-2" /> Secure Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;