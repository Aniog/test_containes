import { Link } from 'react-router-dom';
import { ShoppingBag, Search, X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    }
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transition-transform duration-300 ease-in-out transform flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12 stroke-[1]" />
              <p>Your cart is empty</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted relative overflow-hidden">
                    <img
                      data-strk-img-id={item.images?.primary?.id || `cart-${item.id}`}
                      data-strk-img={item.images?.primary?.query || `[cart-title-${item.id}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-title-${item.id}`} className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      {item.variant && (
                        <p className="text-sm text-muted-foreground mt-1">{item.variant}</p>
                      )}
                      <p className="mt-1">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center border border-border w-fit rounded-sm mt-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-xl">Subtotal</span>
              <span className="text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent transition-colors">
              Checkout
            </button>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}