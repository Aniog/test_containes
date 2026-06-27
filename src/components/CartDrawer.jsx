import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartDrawer.css';

function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    totalItems,
    totalPrice,
    removeFromCart,
    updateQuantity,
    closeDrawer
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isDrawerOpen && (
        <div className="cart-overlay" onClick={closeDrawer} />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isDrawerOpen ? 'cart-drawer-open' : ''}`}>
        <div className="cart-drawer-inner">
          {/* Header */}
          <div className="cart-header">
            <h2 className="cart-title">
              Your Bag ({totalItems})
            </h2>
            <button onClick={closeDrawer} className="cart-close-btn">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={48} strokeWidth={1} />
              <p>Your bag is empty</p>
              <Link to="/shop" onClick={closeDrawer} className="cart-continue-shopping">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.cartId} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.images[0]} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-variant">{item.variant}</p>
                      <p className="cart-item-price">${item.price.toFixed(2)}</p>
                      <div className="cart-item-quantity">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="cart-quantity-btn"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="cart-quantity-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="cart-quantity-btn"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="cart-item-remove"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="cart-footer">
                <div className="cart-subtotal">
                  <span>Subtotal</span>
                  <span className="cart-subtotal-price">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="cart-shipping-note">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="cart-checkout-btn">
                  Checkout
                </button>
                <Link
                  to="/cart"
                  onClick={closeDrawer}
                  className="cart-view-cart"
                >
                  View Cart
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartDrawer;