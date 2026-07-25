import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    clearCart 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream z-[60] flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-taupe/20">
          <h3 className="serif-heading text-xl tracking-wider">Your Cart</h3>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-velmora-taupe hover:text-velmora-base transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-taupe/40 mb-4" />
            <p className="text-velmora-taupe mb-2">Your cart is empty</p>
            <p className="text-sm text-velmora-taupe/70">Discover our collection of demi-fine jewelry</p>
            <Button 
              variant="primary" 
              className="mt-6"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-base/5 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-widest pr-2">{item.name}</p>
                        <p className="text-xs text-velmora-taupe mt-0.5 capitalize">{item.selectedVariant} tone</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-velmora-taupe hover:text-velmora-base"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-taupe/30">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-velmora-base/5"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-velmora-base/5"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium tabular-nums">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-taupe/20 px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-medium tabular-nums">${getCartTotal().toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-taupe">Shipping calculated at checkout</p>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                onClick={() => {
                  alert('Checkout would open here. Cart functionality is complete.');
                  clearCart();
                  setIsCartOpen(false);
                }}
              >
                Proceed to Checkout
              </Button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full text-sm text-velmora-taupe hover:text-velmora-base transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

import { ShoppingBag } from 'lucide-react';
export default CartDrawer;