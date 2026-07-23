import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
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

  const handleCheckout = () => {
    // Placeholder for future checkout integration
    alert('Thank you for your interest in Velmora. Checkout will be available soon.');
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
        <div className="cart-header">
          <h3 className="text-lg font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
            YOUR CART
          </h3>
          <button onClick={closeCart} className="nav-icon">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
            <p className="body-muted mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-gold-outline"
            >
              BROWSE COLLECTION
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <div className="img-placeholder" style={{ fontSize: '0.625rem' }}>
                      {item.name.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">{item.variant}</div>
                    <div className="cart-item-price">${item.price} × {item.quantity}</div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="quantity-selector">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-text-muted hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>TOTAL</span>
                <span>${total}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="btn btn-primary btn-full mb-3"
              >
                PROCEED TO CHECKOUT
              </button>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-outline btn-full text-sm"
              >
                CONTINUE SHOPPING
              </Link>
              <p className="text-center text-xs text-text-muted mt-4">
                Free worldwide shipping on all orders
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
