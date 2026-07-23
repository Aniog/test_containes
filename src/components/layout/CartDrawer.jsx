import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function CartDrawer() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    isCartOpen, 
    setIsCartOpen,
    cartTotal,
    cartItemCount
  } = useCart();
  
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
        setTimeout(() => {
            ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        }, 50);
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={cn(
        "fixed inset-y-0 right-0 z-50 w-[90%] max-w-md bg-background shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out",
        isCartOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-background/95 sticky top-0 z-10">
          <h2 className="font-serif text-2xl">Your Cart ({cartItemCount})</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <ShoppingBag size={48} className="text-muted-foreground/30" />
              <div>
                <p className="text-lg font-serif mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">Discover your next favorite piece.</p>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-primary text-primary-foreground px-8 py-3 tracking-widest text-sm uppercase hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-8">
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-6">
                  <div className="w-24 h-32 bg-muted relative overflow-hidden flex-shrink-0">
                    <img 
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`cart-item`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <Link 
                          to={`/product/${item.id}`} 
                          className="font-serif text-lg tracking-wide uppercase hover:text-primary/70 transition-colors"
                          onClick={() => setIsCartOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.variant ? item.variant : 'Gold'}
                      </p>
                      <p className="text-sm">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          className="p-2 hover:bg-muted transition-colors text-muted-foreground"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          className="p-2 hover:bg-muted transition-colors text-muted-foreground"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between font-serif text-xl mb-6">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 tracking-widest text-sm uppercase hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
