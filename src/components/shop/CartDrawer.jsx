import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity } = useCartStore();
  const cartRef = useRef();

  const _cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      const frameId = window.requestAnimationFrame(() => {
        if (cartRef.current) {
          ImageHelper.loadImages(strkImgConfig, cartRef.current);
        }
      });
      return () => {
        window.cancelAnimationFrame(frameId);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, cart]);

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[90] transition-opacity duration-300",
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />
      
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[100] flex flex-col transform transition-transform duration-300 ease-in-out border-l border-border",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
        ref={cartRef}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl uppercase tracking-wider text-foreground">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                <ShoppingBag size={32} />
              </div>
              <div className="space-y-2">
                <p className="font-serif text-xl text-foreground">Your cart is empty.</p>
                <p className="text-muted-foreground text-sm max-w-[200px] mx-auto">Discover our latest demi-fine collections.</p>
              </div>
              <Button onClick={closeCart} variant="outline" className="mt-4 uppercase tracking-widest text-xs">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted overflow-hidden shrink-0">
                        {item.imgSrc ? (
                          <img 
                            src={item.imgSrc}
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-xs text-muted-foreground uppercase break-words px-2 text-center w-full">Image for {item.name}</span>
                          </div>
                        )}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <Link 
                           to={`/product/${item.id}`} 
                           onClick={closeCart}
                           className="font-serif text-lg leading-tight hover:text-primary transition-colors text-foreground block max-w-[180px]"
                           id={`cart-item-name-${item.id}`}
                        >
                          {item.name}
                        </Link>
                        {item.variant && (
                          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{item.variant}</p>
                        )}
                      </div>
                      <p className="font-sans text-sm font-medium whitespace-nowrap text-foreground">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-8 text-center bg-transparent text-foreground">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        className="text-xs text-muted-foreground hover:text-foreground uppercase tracking-wider underline-offset-4 hover:underline transition-all"
                        onClick={() => removeFromCart(item.id, item.variant)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans text-sm uppercase tracking-wider text-muted-foreground">Subtotal</span>
              <span className="font-serif text-2xl text-foreground font-medium">${_cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <Button className="w-full text-sm uppercase tracking-[0.2em] font-medium h-12" size="lg">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}