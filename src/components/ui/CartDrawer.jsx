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
    getCartTotal,
    clearCart,
  } = useCart();

  const total = getCartTotal();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="overlay open" 
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <div>
              <div className="font-serif text-xl tracking-[0.05em]">Your Cart</div>
              <div className="text-xs text-velmora-text-muted tracking-widest mt-0.5">
                {cart.length} {cart.length === 1 ? 'ITEM' : 'ITEMS'}
              </div>
            </div>
            <button 
              onClick={closeCart} 
              className="p-2 -mr-2 text-velmora-text-muted hover:text-velmora-text"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-surface-alt flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <div className="product-name text-sm tracking-wider pr-4">{item.name}</div>
                          <div className="text-xs text-velmora-text-muted mt-0.5">{item.variantLabel}</div>
                        </div>
                        <div className="text-sm font-medium whitespace-nowrap">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center border border-velmora-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="qty-btn border-r"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <div className="qty-input border-0 text-sm">{item.quantity}</div>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="qty-btn border-l"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-velmora-text-light hover:text-velmora-error p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-border p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-velmora-text-muted">Subtotal</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                <div className="text-xs text-velmora-text-light">
                  Shipping calculated at checkout
                </div>

                <button 
                  className="btn btn-primary w-full"
                  onClick={() => {
                    alert('Checkout would be implemented here. Cart total: ' + formatPrice(total));
                    // In a real app, this would navigate to checkout
                  }}
                >
                  Proceed to Checkout
                </button>

                <button 
                  onClick={closeCart}
                  className="btn btn-outline w-full text-sm"
                >
                  Continue Shopping
                </button>

                <button 
                  onClick={clearCart}
                  className="text-xs text-velmora-text-light hover:text-velmora-text w-full pt-1"
                >
                  Clear Cart
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
              <div className="font-serif text-xl mb-2">Your cart is empty</div>
              <p className="text-sm text-velmora-text-muted mb-6">
                Discover our collection of demi-fine jewelry.
              </p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-gold"
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
