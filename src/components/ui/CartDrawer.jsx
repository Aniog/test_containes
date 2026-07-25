import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleCheckout = () => {
    alert('Thank you for your interest in Velmora. Checkout would be connected to a payment processor in production.');
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header - always at top via flex layout */}
          <div className="flex-none flex items-center justify-between px-6 py-5 border-b border-velmora-light bg-velmora-cream">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-lg tracking-widest">YOUR CART</h2>
            </div>
            <button 
              onClick={closeCart} 
              className="p-3 -mr-2 hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center overflow-y-auto">
              <ShoppingBag className="w-12 h-12 text-velmora-light mb-4" />
              <p className="text-velmora-text mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-text-light mb-6">Discover our collection of demi-fine jewelry</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-primary"
              >
                SHOP THE COLLECTION
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-light flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-widest">{item.name}</p>
                          <p className="text-xs text-velmora-text-light mt-0.5">{item.variant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-velmora-text-light hover:text-velmora-base"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm mt-1">${item.price}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-light">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1.5 hover:bg-velmora-light transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1.5 hover:bg-velmora-light transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer - always visible at bottom */}
              <div className="flex-none p-6 border-t border-velmora-light bg-velmora-cream">
                <div className="flex justify-between mb-4">
                  <span className="text-sm tracking-widest">SUBTOTAL</span>
                  <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                </div>
                <p className="text-xs text-velmora-text-light mb-4">
                  Shipping calculated at checkout. Free worldwide shipping on orders over $75.
                </p>
                <button 
                  onClick={handleCheckout}
                  className="btn btn-primary w-full mb-3"
                >
                  PROCEED TO CHECKOUT
                </button>
                <button 
                  onClick={closeCart}
                  className="btn btn-outline w-full"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;