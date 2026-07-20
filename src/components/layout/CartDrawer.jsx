import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor in production.');
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
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD6]">
          <h2 className="font-serif-custom text-xl tracking-[0.1em]">Your Cart</h2>
          <button onClick={closeCart} className="text-[#6B5F57] hover:text-[#2C2522]" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#6B5F57] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-premium btn-premium-outline"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F8F5F1] flex-shrink-0">
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
                        <p className="text-xs text-[#6B5F57] mt-0.5">{item.variant} Tone</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[#6B5F57] hover:text-[#B8865C]"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-sm mt-1">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="qty-selector">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E5DFD6]">
              <div className="flex justify-between mb-6 text-sm">
                <span className="uppercase tracking-[0.08em]">Total</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6B5F57] mb-4 text-center">
                Shipping calculated at checkout
              </p>
              <button
                onClick={handleCheckout}
                className="btn-premium btn-premium-solid w-full mb-3"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs uppercase tracking-[0.1em] text-[#6B5F57] hover:text-[#2C2522]"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
