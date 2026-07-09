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
    getCartTotal 
  } = useCart();

  const total = getCartTotal();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</span>
          </div>
          <button onClick={closeCart} className="p-1" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-[var(--velmora-border)] mb-4" />
            <p className="text-lg mb-2">Your cart is empty</p>
            <p className="text-sm text-[var(--velmora-muted)] mb-6">
              Discover our collection of fine jewelry
            </p>
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
            <div className="flex-1 overflow-y-auto p-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">
                      {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                    </div>
                    <div className="cart-item-price">${item.price}</div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="quantity-control">
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
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-xs text-[var(--velmora-muted)] hover:text-[var(--velmora-deep)] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(0)}
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="p-6 border-t border-[var(--velmora-border)]">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm tracking-[0.08em] uppercase">Total</span>
                <span className="text-xl font-medium">${total}</span>
              </div>
              <p className="text-xs text-[var(--velmora-muted)] mb-4">
                Shipping calculated at checkout
              </p>
              <button 
                className="btn btn-primary btn-full mb-3"
                onClick={() => {
                  alert('Thank you for your interest! In a production environment, this would proceed to checkout.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </button>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-outline btn-full text-xs"
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