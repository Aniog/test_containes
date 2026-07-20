import { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl transition-transform duration-500 ease-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl uppercase tracking-[0.1em]">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:text-accent p-1">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted gap-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-serif italic text-lg text-center px-12">Your jewelry box is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 border-b border-foreground text-foreground uppercase text-[11px] tracking-widest hover:text-accent hover:border-accent transition-all"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="w-24 h-24 bg-surface rounded-sm relative overflow-hidden flex-shrink-0">
                  <img
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`[cart-item-name-${item.id}] jewelry gold luxury`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.data.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 id={`cart-item-name-${item.id}`} className="font-serif uppercase text-sm tracking-widest">{item.data.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-muted text-[11px] uppercase tracking-widest mt-1">{item.variant} · 18K Gold Plated</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border px-2 py-1 gap-4">
                      <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="hover:text-accent">
                        <Minus size={14} />
                      </button>
                      <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="hover:text-accent">
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-serif text-sm">${item.data.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-surface/30 space-y-6">
            <div className="flex justify-between items-center font-serif text-lg">
              <span className="uppercase tracking-[0.1em]">Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-muted text-center uppercase tracking-widest italic">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full py-4 bg-foreground text-background uppercase text-xs tracking-[0.2em] font-medium hover:bg-accent transition-colors duration-500">
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
