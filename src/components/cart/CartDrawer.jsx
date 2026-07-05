import { useStore } from '@/store';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity } = useStore();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setCartOpen(false)}
      />
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[70] flex flex-col transform transition-transform"
      >
        
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={() => setCartOpen(false)} className="hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>Your cart is empty.</p>
              <Button onClick={() => setCartOpen(false)} variant="outline" className="mt-4">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0 relative">
                    <img 
                      data-strk-img-id={item.imgId + '-cart'}
                      data-strk-img={`[cart-title-${item.id}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-title-${item.id}`} className="font-medium text-sm leading-tight pr-4">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-destructive flex-shrink-0"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Variant: {item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-border rounded-sm">
                        <button 
                          className="p-1 px-2 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-xs w-6 text-center">{item.quantity}</span>
                        <button 
                          className="p-1 px-2 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-background/50 backdrop-blur-md">
            <div className="flex justify-between items-center mb-6 font-medium">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <Button className="w-full h-12 text-sm font-medium tracking-wide uppercase">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}