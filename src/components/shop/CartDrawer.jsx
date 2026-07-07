import React, { useEffect, useRef } from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, cartSubtotal, removeFromCart, updateQuantity } = useCart();
  const drawerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Load images when drawer opens
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, cart]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={`fixed right-0 top-0 h-full w-full sm:w-[500px] bg-background z-[101] shadow-2xl transition-transform duration-500 ease-editorial ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full" ref={containerRef}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <ShoppingBag size={20} />
              <h2 className="title-uppercase text-sm">Your Bag ({cart.reduce((s, i) => s + i.quantity, 0)})</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
              <X size={24} />
            </button>
          </div>
          
          {/* Scrollable Content */}
          <div className="flex-grow overflow-y-auto p-6 space-y-8 no-scrollbar">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="w-24 aspect-[3/4] bg-secondary flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-item-${item.id}-${item.variant}`}
                      data-strk-img={`${item.imageQuery} studio display`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between mb-2">
                      <h3 className="title-uppercase text-xs tracking-wider">
                        <Link to={`/product/${item.id}`} onClick={onClose}>{item.name}</Link>
                      </h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <p className="text-[10px] title-uppercase text-muted-foreground mb-4">Tone: {item.variant}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="px-2 py-1 hover:text-primary transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="px-2 py-1 hover:text-primary transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-sans font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif italic text-2xl mb-8">Your bag is empty.</p>
                <button 
                  onClick={onClose}
                  className="bg-primary text-primary-foreground px-10 py-4 title-uppercase text-xs"
                >
                  Start Shopping
                </button>
              </div>
            )}
          </div>
          
          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-border bg-neutral-50">
              <div className="flex justify-between mb-6">
                <span className="title-uppercase text-xs">Subtotal</span>
                <span className="font-sans font-bold text-lg">${cartSubtotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] title-uppercase text-muted-foreground mb-8 text-center">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full bg-primary text-primary-foreground py-5 title-uppercase text-xs font-bold hover:bg-primary/90 transition-editorial shadow-lg">
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
