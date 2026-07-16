import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from './Button';

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
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

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
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button onClick={closeCart} className="nav-icon">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty</p>
            <Button variant="outline" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.cartItemId} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">{item.variant} Tone</div>
                    <div className="cart-item-price">${item.price}</div>
                    
                    <div className="cart-item-actions">
                      <div className="qty-control">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.cartItemId)}
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
              <div className="cart-total">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Shipping calculated at checkout
              </div>
              <Button variant="primary" fullWidth onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
              <button 
                onClick={closeCart}
                style={{ 
                  width: '100%', 
                  marginTop: '0.75rem', 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer'
                }}
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