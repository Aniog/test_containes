import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

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
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</span>
          </div>
          <button 
            onClick={closeCart} 
            className="p-2 -mr-2 text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <ShoppingBag className="w-12 h-12 mb-4 text-[var(--velmora-border)]" />
            <p className="mb-2 text-lg heading-serif">Your cart is empty</p>
            <p className="mb-6 text-sm text-[var(--velmora-text-muted)]">Discover our collection of demi-fine jewelry.</p>
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
                  <div className="w-20 h-20 bg-[var(--velmora-bg-alt)] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name text-sm leading-tight pr-2">{item.name}</p>
                        <p className="text-xs text-[var(--velmora-text-muted)] mt-0.5">{item.selectedVariant} Tone</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] p-1 -mr-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-[var(--velmora-gold-dark)] mb-3">${item.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="qty-selector">
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[var(--velmora-border)] bg-[var(--velmora-bg)]">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm tracking-[0.08em] uppercase">Total</span>
                <span className="text-xl heading-serif">${cartTotal}</span>
              </div>
              <p className="text-xs text-[var(--velmora-text-muted)] mb-4">Shipping calculated at checkout</p>
              <button 
                className="btn btn-primary btn-full mb-3"
                onClick={() => {
                  alert('Thank you for your interest! Checkout would be connected to a payment processor in production.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </button>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="block text-center text-xs tracking-[0.08em] uppercase text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]"
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
