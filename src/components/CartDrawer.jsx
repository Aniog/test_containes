import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    cartTotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const handleCheckout = () => {
    // Placeholder for future checkout integration
    alert('Thank you for shopping with Velmora. Checkout would be connected to a payment processor here.');
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
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-widest text-sm">YOUR CART</span>
          </div>
          <button
            onClick={closeCart}
            className="text-velmora-text-muted hover:text-velmora-text"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Content */}
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
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 bg-velmora-surface flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <div className="product-name text-sm tracking-wider pr-2">
                          {item.name}
                        </div>
                        <div className="text-xs text-velmora-text-muted mt-0.5">
                          {item.variant}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-velmora-text-muted hover:text-velmora-text"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="text-sm font-medium mt-1">
                      ${item.price}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
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
                      <div className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(0)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-velmora-border bg-velmora-surface">
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-velmora-text-muted">Subtotal</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <p className="text-xs text-velmora-text-muted mb-4">
                Shipping calculated at checkout
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

      {/* Toast Notification */}
      {useCart().toast && (
        <div className="toast">
          {useCart().toast}
        </div>
      )}
    </>
  );
};

export default CartDrawer;
