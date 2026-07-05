import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  const total = getCartTotal();
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-lg font-medium tracking-widest">YOUR CART</h2>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-velmora-cream transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
            <p className="text-velmora-brown mb-2">Your cart is empty</p>
            <p className="text-sm text-velmora-taupe mb-6">Discover our collection of fine jewelry</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-primary"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-widest">{item.name}</p>
                        <p className="text-xs text-velmora-taupe mt-0.5">{item.variant}</p>
                      </div>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="qty-selector">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-velmora-taupe hover:text-velmora-brown underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-medium">${total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-velmora-taupe">Shipping</span>
                <span className="font-medium text-velmora-gold">Free</span>
              </div>
              <div className="divider my-2" />
              <div className="flex justify-between text-base font-medium">
                <span>Total</span>
                <span>${grandTotal}</span>
              </div>
              
              <button 
                className="btn btn-primary w-full mt-4"
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </button>

              <button
                onClick={closeCart}
                className="w-full text-sm text-velmora-taupe hover:text-velmora-brown underline py-2 transition-colors"
              >
                Continue Shopping
              </button>
              
              <p className="text-center text-xs text-velmora-taupe">
                or 4 interest-free payments of ${(grandTotal / 4).toFixed(0)} with
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;