import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  const total = getCartTotal();

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
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-velmora-text-muted hover:text-velmora-text"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
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
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-bg-alt flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-4">
                          {item.name}
                        </p>
                        <p className="text-xs text-velmora-text-muted mt-0.5">
                          {item.selectedVariant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-velmora-text-muted hover:text-velmora-accent p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-sm font-medium mb-3">
                      ${item.price}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:bg-velmora-bg-alt"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:bg-velmora-bg-alt"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-velmora-border bg-velmora-bg">
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-sm uppercase tracking-[0.1em]">Total</span>
                <span className="text-xl font-serif">${total}</span>
              </div>
              <p className="text-xs text-velmora-text-muted mb-4 text-center">
                Shipping calculated at checkout
              </p>
              <button
                onClick={() => {
                  toast.success('Thank you! Checkout would open here in a real store.');
                  closeCart();
                }}
                className="btn btn-primary w-full mb-3"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-outline w-full text-sm"
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
