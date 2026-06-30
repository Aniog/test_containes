import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cartItems]);

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={toggleCart}
          aria-hidden="true"
        />
      )}
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button onClick={toggleCart} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground space-y-4">
              <ShoppingBag size={48} className="stroke-[1]" />
              <p>Your cart is empty.</p>
              <button 
                onClick={toggleCart}
                className="mt-4 border border-border px-6 py-2 uppercase text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted flex-shrink-0 relative overflow-hidden">
                    <img 
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       alt={item.title}
                       className="w-full h-full object-cover object-center"
                       data-strk-img-id={item.imgId}
                       data-strk-img={`[cart-item-${item.id}-title] [cart-item-${item.id}-desc]`}
                       data-strk-img-ratio="1x1"
                       data-strk-img-width="200"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 id={`cart-item-${item.id}-title`} className="font-medium text-sm font-serif uppercase tracking-wider">{item.title}</h3>
                        <p id={`cart-item-${item.id}-desc`} className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground p-1"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-xs w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-medium">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="uppercase text-sm tracking-wider">Subtotal</span>
              <span className="font-medium text-lg">${getCartTotal().toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;