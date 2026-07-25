import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, cartTotal } = useCartStore();
  const drawerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeCart();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling on body when drawer is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  // Load images when cart opens or items change
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 backdrop-blur-sm ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-premium z-[70] transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl tracking-widest uppercase">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 -mr-2 text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <ShoppingBag className="w-16 h-16 text-muted-foreground stroke-1" />
              <p className="font-serif text-xl tracking-wider text-muted-foreground">Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="btn-outline border-transparent hover:border-border mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-8">
              {items.map((item) => (
                <li key={item.key} className="flex gap-6">
                  {/* Item Image */}
                  <div className="w-24 h-32 bg-muted relative overflow-hidden shrink-0">
                    <img 
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      alt={item.title}
                      className="absolute inset-0 object-cover w-full h-full"
                      data-strk-img-id={`cart-thumb-${item.id}`}
                      data-strk-img={`[cart-item-${item.id}]`}
                      data-strk-img-ratio="3x4"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={closeCart}
                          className="font-serif text-base tracking-widest uppercase hover:text-primary transition-colors line-clamp-2"
                          id={`cart-item-${item.id}`}
                        >
                          {item.title}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.key)}
                          className="text-muted-foreground hover:text-red-500 transition-colors shrink-0"
                          aria-label={`Remove ${item.title} from cart`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {item.variant && (
                        <p className="text-sm text-muted-foreground mt-1 font-sans">
                          {item.variant}
                        </p>
                      )}
                      
                      <p className="text-sm font-sans mt-2">
                        ${item.price}
                      </p>
                    </div>

                    <div className="flex items-center mt-4 border border-border w-fit">
                      <button 
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="p-2 text-foreground/60 hover:text-foreground disabled:opacity-30 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-sans text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="p-2 text-foreground/60 hover:text-foreground transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif text-lg tracking-widest uppercase">Subtotal</span>
              <span className="font-serif text-xl tracking-widest">${cartTotal()}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-6 font-sans">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full btn-primary text-base">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;