import { useCartStore } from '@/lib/cart';
import { X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem } = useCartStore();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div ref={drawerRef}>
      <div 
        className="fixed inset-0 bg-black/40 z-[100] transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-background z-[101] shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={closeCart} className="p-2 -mr-2 hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <Link 
                to="/collection" 
                onClick={closeCart}
                className="btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                  <img 
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] cart thumbnail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">
                        {item.name}
                      </h3>
                      <button 
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    {item.variant && (
                      <p className="text-sm text-muted-foreground mt-1 capitalize">
                        {item.variant}
                      </p>
                    )}
                    <p className="mt-1">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-border">
                      <button 
                        className="p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        className="p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-lg font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary py-4 text-base">
              Checkout Placeholder
            </button>
          </div>
        )}
      </div>
    </div>
  );
}