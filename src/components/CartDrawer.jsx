import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
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

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="cart-overlay open" 
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D4C9B9]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} />
            <span className="font-medium tracking-[0.1em] uppercase text-sm">Your Cart</span>
          </div>
          <button onClick={closeCart} className="p-2" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F1EDE6] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-[0.1em] pr-4">{item.name}</div>
                        <div className="text-xs text-[#6B6058] mt-0.5">{item.variant}</div>
                      </div>
                      <div className="text-sm font-medium whitespace-nowrap">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="qty-selector">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#6B6058] hover:text-[#2C2522] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#D4C9B9] p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B6058]">Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6B6058]">Shipping</span>
                <span className="font-medium text-[#8B7355]">Free</span>
              </div>
              <div className="divider" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>

              <button 
                className="btn btn-primary btn-full mt-2"
                onClick={() => {
                  alert('Checkout would be implemented here. Cart total: $' + grandTotal.toFixed(2));
                  closeCart();
                }}
              >
                Proceed to Checkout
              </button>
              
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="block text-center text-xs tracking-[0.1em] uppercase text-[#6B6058] hover:text-[#2C2522]"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          /* Empty Cart */
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-[#D4C9B9] mb-4" />
            <p className="text-lg mb-2">Your cart is empty</p>
            <p className="text-sm text-[#6B6058] mb-6">Discover our collection of demi-fine jewelry.</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-outline"
            >
              Browse Collection
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
