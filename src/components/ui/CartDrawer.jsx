import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, cartTotal, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    // For now, just show a message - checkout can be added later
    alert('Thank you for shopping with Velmora. Checkout would be implemented here.');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="cart-overlay open" 
        onClick={closeCart}
        aria-hidden="true"
      />
      <div className="cart-drawer open" role="dialog" aria-label="Shopping cart">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={closeCart} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state">
            <h4>Your cart is empty</h4>
            <p className="mt-2">Discover our collection of fine jewelry.</p>
            <button 
              className="btn btn-outline mt-4" 
              onClick={() => {
                closeCart();
                navigate('/shop');
              }}
            >
              Shop Now
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">{item.variant}</div>
                    <div className="cart-item-price">${item.price}</div>
                    
                    <div className="cart-item-actions">
                      <div className="qty-control">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#6b635c', marginBottom: '1rem' }}>
                Shipping calculated at checkout
              </p>
              <button 
                className="btn btn-primary cart-checkout"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
              <button 
                className="btn btn-outline mt-2"
                onClick={closeCart}
                style={{ width: '100%' }}
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
