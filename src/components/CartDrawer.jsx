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
    cartTotal 
  } = useCart();

  const handleCheckout = () => {
    alert('Checkout flow would be connected to a payment processor here.');
    closeCart();
  };

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', letterSpacing: '0.1em' }}>
            YOUR CART
          </h3>
          <button onClick={closeCart} className="nav-icon">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
            <p className="body-text mb-4">Your cart is empty</p>
            <Link 
              to="/shop" 
              className="btn btn-outline btn-sm"
              onClick={closeCart}
            >
              Shop the Collection
            </Link>
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
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right" style={{ fontFamily: 'var(--font-serif)' }}>
                    ${(item.price * item.quantity).toFixed(0)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>TOTAL</span>
                <span>${cartTotal}</span>
              </div>
              <button 
                className="btn btn-primary w-full mb-3"
                onClick={handleCheckout}
              >
                PROCEED TO CHECKOUT
              </button>
              <button 
                className="btn btn-ghost w-full text-sm"
                onClick={closeCart}
              >
                CONTINUE SHOPPING
              </button>
              <p className="text-center text-xs mt-4" style={{ color: 'var(--color-text-muted)' }}>
                Free worldwide shipping on orders over $75
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
