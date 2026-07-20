import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleCheckout = () => {
    // Placeholder for checkout - in real app would navigate to checkout
    alert('Thank you for shopping with Velmora. Checkout would open here in a production environment.');
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
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif-custom text-xl tracking-[0.08em]">Your Cart</h2>
          <button onClick={closeCart} className="p-2 -mr-2" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-velmora-muted mb-6">Your cart is empty</p>
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
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-bg-alt flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-4">{item.name}</p>
                        <p className="text-xs text-velmora-muted mt-1">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-velmora-muted hover:text-velmora-dark"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
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
                      <p className="font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-velmora-border bg-velmora-bg">
              <div className="flex justify-between mb-4 text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium">${getCartTotal().toFixed(0)}</span>
              </div>
              <p className="text-xs text-velmora-muted mb-6">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <button
                onClick={handleCheckout}
                className="btn btn-primary w-full mb-3"
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
