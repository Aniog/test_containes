import React from 'react';
import { useStore } from '../lib/store';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartDrawer = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col translate-x-0">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl tracking-widest">YOUR CART</h2>
          <button onClick={closeCart} className="p-2 hover:bg-secondary/50 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <ShoppingBag size={48} className="text-muted-foreground/50" />
              <div>
                <p className="font-serif text-xl tracking-wide mb-2">Your cart is empty.</p>
                <p className="text-sm text-foreground/80">Discover our collection of everyday fine jewelry.</p>
              </div>
              <a 
                href="/shop" 
                onClick={closeCart}
                className="bg-accent text-accent-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors"
              >
                Shop Now
              </a>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item, index) => (
                <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4">
                  
                  {/* Image */}
                  <div className="w-24 aspect-[3/4] bg-secondary/20 shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Details */}
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif text-sm tracking-widest uppercase truncate pr-4">{item.product.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground text-xs uppercase hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Variant: {item.variant === 'gold' ? '18K Gold' : 'Silver'}</p>
                      <p className="text-sm font-medium">${item.product.price}</p>
                    </div>
                    
                    {/* Quantity */}
                    <div className="flex items-center border border-border w-max">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-secondary/50 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-secondary/50 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-secondary/10 border-t border-border">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm tracking-widest uppercase">Subtotal</span>
              <span className="text-xl font-serif">${getCartTotal().toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]">
              Proceed to Checkout
            </button>
          </div>
        )}
        
      </div>
    </>
  );
};

export default CartDrawer;
