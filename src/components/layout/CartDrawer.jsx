import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import useCartStore from '@/store/useCartStore';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCartStore();

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />
      
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-borders">
          <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:rotate-90 transition-transform duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <ShoppingBag className="w-16 h-16 text-borders stroke-[1]" />
              <div>
                <p className="text-lg font-serif mb-2">Your cart is empty</p>
                <p className="text-sm text-muted">Discover something beautiful.</p>
              </div>
              <button 
                onClick={closeCart}
                className="px-8 py-3 bg-foreground text-background text-sm font-medium tracking-wide uppercase hover:bg-primary transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary flex-shrink-0 relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1599643478524-fb66f70a00ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif tracking-wide uppercase text-sm">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted hover:text-foreground text-xs font-medium uppercase tracking-wider"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-xs text-muted mb-2">Variant: {item.variant}</p>
                      <p className="text-sm">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center border border-borders w-24 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors text-muted hover:text-foreground"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="flex-1 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors text-muted hover:text-foreground"
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
          <div className="p-6 border-t border-borders bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold uppercase tracking-wider text-sm">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal().toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4 text-center">Shipping & taxes calculated at checkout</p>
            <button 
              className="w-full py-4 bg-foreground text-background font-medium tracking-widest uppercase text-sm hover:bg-primary hover:text-foreground transition-colors duration-300"
              onClick={() => alert('Checkout flow not implemented')}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
