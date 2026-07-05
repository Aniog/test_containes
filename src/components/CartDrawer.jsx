import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 cart-overlay"
        onClick={closeCart}
      />

      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl">Your Cart ({cartItems.length})</h2>
            <button 
              onClick={closeCart}
              className="p-2 hover:text-gold transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-stone mb-4" />
                <p className="text-stone">Your cart is empty</p>
                <button 
                  onClick={closeCart}
                  className="mt-4 text-sm text-gold hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wide mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone mb-2">Variant: {item.variant}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          <button 
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-xs text-stone hover:text-charcoal transition-colors mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between font-medium">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone text-center">Shipping calculated at checkout</p>
              
              <Link 
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-gold text-white text-center py-3 text-sm tracking-wide uppercase hover:bg-gold-dark transition-colors"
              >
                Proceed to Checkout
              </Link>
              
              <button 
                onClick={closeCart}
                className="block w-full text-center text-sm text-stone hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;