import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would be connected to a payment processor in production.');
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
        <div className="flex items-center justify-between p-6 border-b border-[#e5e0d8]">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button onClick={closeCart} className="p-1" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#8a8178] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-outline"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.map((item) => (
                <div key={item.cartId} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">
                      {item.selectedVariant.label} · Qty {item.quantity}
                    </div>
                    <div className="cart-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="quantity-selector">
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#8a8178] hover:text-[#b89778] p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#e5e0d8]">
              <div className="flex justify-between mb-4">
                <span className="text-sm uppercase tracking-[0.1em]">Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#8a8178] mb-4">
                Shipping calculated at checkout
              </p>
              <button
                onClick={handleCheckout}
                className="btn btn-primary btn-full mb-3"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-outline btn-full text-sm"
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
