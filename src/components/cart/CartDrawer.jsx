import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
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
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl">Your Cart</h2>
            <button 
              onClick={closeCart}
              className="text-velmora-text-muted hover:text-velmora-text"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-velmora-surface-warm flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <div>
                            <div className="product-name text-sm tracking-wider">{item.name}</div>
                            <div className="text-xs text-velmora-text-muted mt-0.5">{item.variant}</div>
                          </div>
                          <div className="text-sm font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-velmora-border">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-velmora-surface-warm transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-velmora-surface-warm transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button 
                            onClick={() => removeFromCart(item.id)}
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
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-border p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-velmora-text-muted">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-velmora-text-muted">
                  Shipping calculated at checkout
                </p>
                <button 
                  className="btn btn-primary w-full"
                  onClick={() => {
                    alert('Checkout would be implemented here. Cart total: ' + formatPrice(cartTotal));
                  }}
                >
                  Proceed to Checkout
                </button>
                <Link 
                  to="/shop" 
                  onClick={closeCart}
                  className="btn btn-outline w-full text-center block"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
              <p className="text-lg font-serif mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-text-muted mb-6">
                Discover our collection of fine jewelry
              </p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-primary"
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
