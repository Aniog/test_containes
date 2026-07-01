import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    closeCart,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    // Placeholder for future checkout integration
    alert('Thank you for shopping with Velmora. Checkout would be connected to a payment processor here.');
    clearCart();
    closeCart();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[60]"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-bg z-[70] flex flex-col shadow-2xl ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium tracking-[0.05em]">YOUR CART</span>
          </div>
          <button onClick={closeCart} aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images.primary}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-[0.06em] leading-tight">{item.name}</div>
                        <div className="text-xs text-velmora-muted mt-0.5">{item.variant}</div>
                      </div>
                      <div className="text-sm font-medium">${item.price * item.quantity}</div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-velmora-cream"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-velmora-cream"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-xs text-velmora-muted hover:text-velmora-charcoal underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <div className="text-xs text-velmora-muted">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </div>
              <button
                onClick={handleCheckout}
                className="btn btn-primary w-full"
              >
                PROCEED TO CHECKOUT
              </button>
              <button
                onClick={closeCart}
                className="btn btn-outline w-full text-sm"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
            <p className="text-lg mb-2">Your cart is empty</p>
            <p className="text-sm text-velmora-muted mb-8">Discover pieces crafted to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-primary"
            >
              SHOP THE COLLECTION
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;