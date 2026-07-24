import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, cartTotal, isCartOpen, closeCart, removeFromCart, updateQuantity } = useCart();

  const handleCheckout = () => {
    // Placeholder for future checkout integration
    alert('Checkout flow would open here. Cart total: $' + cartTotal);
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
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</span>
          </div>
          <button onClick={closeCart} className="text-velmora-text-muted hover:text-velmora-text">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 bg-velmora-bg-alt flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <div>
                        <div className="product-name text-xs pr-4">{item.name}</div>
                        <div className="text-xs text-velmora-text-muted mt-0.5">
                          {item.selectedVariant} · ${item.price}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-velmora-text-light hover:text-velmora-text text-xs"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-velmora-bg-alt transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-velmora-bg-alt transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-sm font-medium tabular-nums">
                        ${(item.price * item.quantity).toFixed(0)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-velmora-border bg-velmora-bg">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-velmora-text-muted">Subtotal</span>
                <span className="font-medium tabular-nums">${cartTotal}</span>
              </div>
              <p className="text-xs text-velmora-text-muted mb-4">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <button onClick={handleCheckout} className="btn btn-primary btn-full mb-3">
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
        ) : (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-velmora-border mb-4" />
            <p className="text-lg font-serif mb-2">Your cart is empty</p>
            <p className="text-sm text-velmora-text-muted mb-6">
              Discover our collection of demi-fine jewelry.
            </p>
            <Link to="/shop" onClick={closeCart} className="btn btn-accent">
              Shop the Collection
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;