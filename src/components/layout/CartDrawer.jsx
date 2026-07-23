import React, { useEffect, useRef } from 'react';
import { useCartStore } from '../../store/cartStore';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem } = useCartStore();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart();
      }
    };
    
    // slight delay to prevent immediate close on toggle click
    const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleOutsideClick);
    }, 0);
    
    return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [isOpen, closeCart]);

  useEffect(() => {
      if (isOpen) {
          document.body.style.overflow = 'hidden';
          const frameId = requestAnimationFrame(() => {
            if (drawerRef.current) {
              const imgs = drawerRef.current.querySelectorAll('[data-cart-img-id]');
              imgs.forEach(img => {
                  const id = img.getAttribute('data-cart-img-id') + '-thumb';
                  const url = strkImgConfig[id]?.results?.[0]?.url || strkImgConfig[img.getAttribute('data-cart-img-id')]?.results?.[0]?.url;
                  if (url) {
                      // Format URL with 200px width 
                      const parsed = new URL(url);
                      parsed.searchParams.set('w', '200');
                      parsed.searchParams.set('q', '90');
                      parsed.searchParams.set('fit', 'max');
                      parsed.searchParams.set('fm', 'jpg');
                      img.src = parsed.toString();
                  }
              });
            }
          });
          return () => {
              cancelAnimationFrame(frameId);
              document.body.style.overflow = 'unset';
          }
      } else {
          document.body.style.overflow = 'unset';
      }
      return () => { document.body.style.overflow = 'unset' };
  }, [isOpen, items])

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
      />
      <div 
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={closeCart} className="hover:opacity-70 transition-opacity">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground opacity-70 gap-4">
              <ShoppingBag className="w-12 h-12" />
              <p>Your cart is empty.</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-none"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0 relative">
                  <img 
                    data-cart-img-id={item.imgId1}
                    src=""
                    alt={item.name} 
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 id={`cart-item-name-${item.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-1">{item.name}</h3>
                      {item.variant && <p className="text-xs text-muted-foreground capitalize">Color: {item.variant}</p>}
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-border h-8 w-24">
                      <button 
                        className="w-1/3 flex items-center justify-center hover:bg-muted transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-1/3 text-center text-xs font-medium">{item.quantity}</span>
                      <button 
                        className="w-1/3 flex items-center justify-center hover:bg-muted transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-card shrink-0">
            <div className="flex justify-between py-2 text-muted-foreground">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 font-serif text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center my-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;