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
    getCartTotal,
    clearCart,
  } = useCart();

  const total = getCartTotal();

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
      <div className="cart-drawer open">
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="text-lg font-medium tracking-[0.1em] uppercase">Your Cart</h2>
          <button
            onClick={closeCart}
            className="icon-btn text-velmora-text"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-velmora-border mb-4" />
            <p className="text-velmora-text-muted mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-bg-alt flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="product-name text-sm pr-2">{item.name}</h4>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-velmora-text-light hover:text-velmora-text"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-velmora-text-muted mb-2">
                      {item.selectedVariant}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="qty-selector">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-velmora-gold">
                        ${(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-velmora-border bg-velmora-bg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm tracking-[0.08em] uppercase">Total</span>
                <span className="text-lg font-medium text-velmora-gold">
                  ${total}
                </span>
              </div>
              <p className="text-xs text-velmora-text-muted mb-4">
                Shipping calculated at checkout
              </p>
              <button
                onClick={() => {
                  alert('Thank you for your interest! This is a demo storefront. In a real implementation, this would proceed to checkout.');
                  clearCart();
                  closeCart();
                }}
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
