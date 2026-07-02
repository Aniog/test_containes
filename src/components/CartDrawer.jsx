import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  // Close cart when navigating to a new page
  useEffect(() => {
    if (isCartOpen) {
      closeCart();
    }
  }, [location.pathname]);

  // Lock body scroll and handle Escape key when cart is open
  useEffect(() => {
    if (!isCartOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="cart-overlay open fixed inset-0 bg-black/60 z-[60]"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="cart-drawer open fixed top-0 right-0 bottom-0 w-full max-w-md bg-base-50 z-[70] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-base-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium tracking-[0.05em] text-sm">YOUR CART</span>
          </div>
          <button onClick={closeCart} className="p-2" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-base-300 mb-4" />
            <p className="text-base-800 mb-2">Your cart is empty</p>
            <p className="text-sm text-base-600 mb-6">Discover our collection of fine jewelry</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-primary text-sm"
            >
              SHOP THE COLLECTION
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-base-100 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.06em] leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs text-base-600 mt-1">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-base-600 hover:text-base-900"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm mt-1">${item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-7 h-7 border border-base-300 flex items-center justify-center hover:bg-base-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-7 h-7 border border-base-300 flex items-center justify-center hover:bg-base-100"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-base-200 px-6 py-6 bg-base-50">
              <div className="flex justify-between text-sm mb-4">
                <span className="tracking-[0.05em]">SUBTOTAL</span>
                <span className="font-medium">${total}</span>
              </div>
              <p className="text-xs text-base-600 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
                className="btn btn-primary w-full mb-3"
              >
                PROCEED TO CHECKOUT
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-sm tracking-[0.05em] hover:text-gold-600"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
