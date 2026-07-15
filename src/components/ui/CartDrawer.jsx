import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
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
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border-light)]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-serif text-xl">Your Cart</h2>
          </div>
          <button onClick={closeCart} className="p-2 hover:bg-[var(--color-bg-alt)] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[var(--color-border)] mb-4" />
            <p className="text-[var(--color-text-muted)] mb-6">Your cart is empty</p>
            <Link to="/shop" onClick={closeCart} className="btn btn-outline">
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--color-bg-alt)] flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <p className="product-name text-sm pr-2">{item.name}</p>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)] mb-2">
                      {item.selectedVariant} • ${item.price}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="qty-selector">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="qty-btn"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="qty-btn"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[var(--color-border-light)]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-widest">Total</span>
                <span className="text-xl font-serif">${getCartTotal().toFixed(0)}</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mb-4">
                Shipping calculated at checkout
              </p>
              <button onClick={handleCheckout} className="btn btn-primary w-full mb-3">
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-outline w-full text-center"
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
