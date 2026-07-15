import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
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
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="font-serif text-xl">Your Cart</h2>
            </div>
            <button 
              onClick={closeCart}
              className="p-2 hover:bg-[var(--velmora-bg-dark)] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[var(--velmora-bg-dark)] flex-shrink-0">
                      <img 
                        src={item.images?.[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-wider">{item.name}</p>
                          <p className="text-xs text-muted mt-0.5">{item.variant}</p>
                        </div>
                        <p className="text-sm font-medium">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="quantity-selector">
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-xs text-muted hover:text-[var(--velmora-text)] underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[var(--velmora-border)] space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium">${total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="font-medium text-[var(--velmora-gold-dark)]">Free</span>
                </div>
                <div className="velmora-divider my-2" />
                <div className="flex justify-between text-base font-medium">
                  <span>Total</span>
                  <span>${grandTotal}</span>
                </div>
                
                <button 
                  className="velmora-btn velmora-btn-primary w-full mt-2"
                  onClick={() => {
                    alert('Checkout would be implemented with a real payment processor.');
                    closeCart();
                  }}
                >
                  Proceed to Checkout
                </button>
                
                <Link 
                  to="/shop" 
                  onClick={closeCart}
                  className="block text-center text-sm text-muted hover:text-[var(--velmora-text)] underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <ShoppingBag className="w-12 h-12 text-[var(--velmora-border)] mb-4" />
              <p className="font-serif text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-muted mb-6">Discover our collection of demi-fine jewelry</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="velmora-btn velmora-btn-outline"
              >
                Shop the Collection
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
