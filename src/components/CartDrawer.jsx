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
        <div className="flex items-center justify-between p-6 border-b border-velmora-border-light">
          <h2 className="serif text-xl">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="text-velmora-text-muted hover:text-velmora-text"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-velmora-text-muted mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-gold-outline"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-warm-gray flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-widest">{item.name}</p>
                        <p className="text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                      </div>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 hover:bg-velmora-warm-gray transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 hover:bg-velmora-warm-gray transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-velmora-text-muted hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="p-6 border-t border-velmora-border-light bg-white">
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-velmora-text-muted">Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-velmora-text-muted">Shipping</span>
                  <span className="text-velmora-gold">Free</span>
                </div>
                <div className="divider pt-2 mt-2">
                  <div className="flex justify-between font-medium pt-2">
                    <span>Total</span>
                    <span>${grandTotal}</span>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-primary w-full mb-3"
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </button>
              
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="block text-center text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors"
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