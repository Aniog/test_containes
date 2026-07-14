import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const formatPrice = (price) => `$${price}`;

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`} role="dialog" aria-label="Shopping cart">
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="text-lg font-medium tracking-[0.08em]">YOUR CART</h2>
          <button onClick={closeCart} className="icon-btn" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-velmora-text-muted mb-6">Your cart is empty</p>
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
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-bg-alt flex-shrink-0">
                    {/* Placeholder for product image */}
                    <div className="w-full h-full flex items-center justify-center text-velmora-text-light text-xs">
                      {item.name.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="product-name text-sm tracking-[0.08em] leading-tight pr-2">
                          {item.name}
                        </div>
                        <div className="text-xs text-velmora-text-muted mt-0.5">
                          {item.variant}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-velmora-text-muted hover:text-velmora-text p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="quantity-selector">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="text-sm font-medium text-velmora-gold">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-velmora-border">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm uppercase tracking-[0.08em]">Total</span>
                <span className="text-xl font-medium text-velmora-gold">
                  {formatPrice(cartTotal)}
                </span>
              </div>
              <p className="text-xs text-velmora-text-muted mb-4">
                Shipping calculated at checkout
              </p>
              <button
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
                className="btn btn-primary btn-full mb-3"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-outline btn-full text-sm"
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
