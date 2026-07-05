import React, { useEffect, useRef } from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = ({ isOpen, onClose }) => {
  // Dummy cart state for now
  const cartItems = [
    {
      id: 1,
      name: 'VIVID AURA JEWELS',
      price: 42,
      quantity: 1,
      variant: 'Gold',
      imgId: 'cart-img-1'
    }
  ];

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen]);

  return (
    <div ref={containerRef}>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl font-bold tracking-wider">YOUR CART</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground gap-4">
              <p>Your cart is currently empty.</p>
              <Link 
                to="/shop" 
                onClick={onClose}
                className="bg-primary text-primary-foreground px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors rounded-sm"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0 relative">
                    <img 
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[cart-item-title-${item.id}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-item-title-${item.id}`} className="font-serif font-bold uppercase tracking-wider text-sm">{item.name}</h3>
                        <button className="text-muted-foreground hover:text-foreground">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.variant}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-border rounded-sm">
                        <button className="px-3 py-1 text-muted-foreground hover:text-foreground">
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button className="px-3 py-1 text-muted-foreground hover:text-foreground">
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-medium">${item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 bg-muted/30">
            <div className="flex justify-between mb-4 text-sm font-medium">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-bold hover:bg-primary/90 transition-colors rounded-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;