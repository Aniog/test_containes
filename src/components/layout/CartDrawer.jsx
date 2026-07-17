import React, { useEffect, useRef } from 'react';
import { useCartStore } from '../../lib/store';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/data/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal } = useCartStore();
  const drawerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      // Prevent scrolling on body when cart is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 transition-opacity z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl tracking-wide uppercase">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 -mr-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-none hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Item Image */}
                  <div className="w-24 h-28 bg-muted overflow-hidden flex-shrink-0">
                    <img 
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      data-strk-img-id={`cart-img-${item.id}`}
                      data-strk-img={`[cart-item-${item.id}-name] jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 
                          id={`cart-item-${item.id}-name`}
                          className="font-sans font-medium text-sm tracking-widest uppercase hover:text-primary transition-colors"
                        >
                          <Link to={`/product/${item.id}`} onClick={closeCart}>
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm">${item.price}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 capitalize">{item.variant}</p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.variant, item.quantity - 1);
                            } else {
                              removeItem(item.id, item.variant);
                            }
                          }}
                          className="p-1.5 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif text-lg">Subtotal</span>
              <span className="font-serif text-lg">{formatPrice(cartTotal())}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}