import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[60] transition-opacity" />
      )}

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-border flex justify-between items-center bg-background">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground mr-0">
                <ShoppingBag size={24} strokeWidth={1.5}/>
              </div>
              <div>
                <p className="font-serif text-xl mb-2">Your cart is empty</p>
                <p className="text-muted-foreground text-sm">Discover our latest collection.</p>
              </div>
              <button 
                onClick={() => {
                  setIsCartOpen(false);
                }}
                className="btn-accent px-8 py-3 w-max"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4 border-b border-border/50 pb-6 last:border-0 last:pb-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-muted overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex flex-col flex-1 justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-sans text-sm font-medium tracking-wide uppercase">{item.name}</h3>
                        {item.variant && (
                          <p className="text-xs text-muted-foreground mt-1 capitalize">{item.variant}</p>
                        )}
                        <p className="text-sm font-medium mt-2">${item.price}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs underline text-muted-foreground hover:text-foreground"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center border border-border w-max">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:bg-muted"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:bg-muted"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-6 bg-background border-t border-border">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-lg">Subtotal</span>
              <span className="font-medium text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mb-6">
              Taxes and shipping calculated at checkout.
            </p>
            
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-sm tracking-widest uppercase font-medium transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}