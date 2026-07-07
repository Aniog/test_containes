import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleCheckout = () => {
    alert('Thank you for your interest! This is a demo storefront. In a real implementation, this would proceed to checkout.');
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
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <div className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</div>
            <div className="text-xs text-text-muted mt-0.5">{cart.length} {cart.length === 1 ? 'item' : 'items'}</div>
          </div>
          <button onClick={closeCart} className="close-btn" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="text-text-muted mb-4">Your cart is empty</div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-outline btn-sm"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-bg-alt flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-xs tracking-[0.12em] pr-4">{item.name}</div>
                        <div className="text-xs text-text-muted mt-0.5">{item.selectedVariant} Tone</div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-text-muted hover:text-deep"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="qty-selector">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="price text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm tracking-[0.05em] uppercase">Total</span>
                <span className="price text-xl">${getCartTotal().toFixed(2)}</span>
              </div>
              <p className="text-xs text-text-muted">Shipping calculated at checkout</p>
              <button
                onClick={handleCheckout}
                className="btn btn-primary w-full"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="btn btn-outline w-full"
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

export default CartDrawer;
