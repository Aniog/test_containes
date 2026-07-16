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
    cartTotal,
  } = useCart();

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
      <div className="cart-drawer open" role="dialog" aria-label="Shopping cart">
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-medium text-lg tracking-widest">YOUR CART</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-charcoal hover:text-gold"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-border mb-4" />
            <p className="text-muted mb-6">Your cart is empty</p>
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
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-bg-alt flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name text-sm tracking-widest pr-2">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted mt-0.5">
                          {item.selectedVariant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-muted hover:text-charcoal p-1 -mr-1"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-sm text-muted mb-3">
                      ${item.price}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="quantity-selector">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="quantity-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="quantity-btn"
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
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="uppercase tracking-widest">Total</span>
                <span className="font-medium text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted text-center">
                Shipping calculated at checkout
              </p>
              <button
                onClick={() => {
                  alert('Checkout would be implemented with a real payment provider.');
                  closeCart();
                }}
                className="btn btn-primary btn-full"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs uppercase tracking-widest text-muted hover:text-gold"
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
