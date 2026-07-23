import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    isLoading,
    closeCart,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    getCartCount,
  } = useCart();

  const cartTotal = getCartTotal();
  const cartCount = getCartCount();
  const shippingThreshold = 50;
  const freeShippingProgress = Math.min((cartTotal / shippingThreshold) * 100, 100);
  const amountToFreeShipping = Math.max(0, shippingThreshold - cartTotal);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide">YOUR CART</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        {cartCount > 0 && (
          <div className="px-6 py-3 bg-sand/50">
            <div className="flex items-center justify-between text-xs mb-2">
              {amountToFreeShipping > 0 ? (
                <span className="text-warm-gray">
                  Add <span className="font-semibold text-charcoal">${amountToFreeShipping.toFixed(0)}</span> for free shipping
                </span>
              ) : (
                <span className="text-charcoal font-medium">
                  You've unlocked free shipping!
                </span>
              )}
              <span className="text-gold font-semibold">${cartTotal.toFixed(0)}</span>
            </div>
            <div className="h-1 bg-sand rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-sand mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-warm-gray mb-6">
                Discover our collection of elegant demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-ivory text-xs font-medium tracking-[0.15em] uppercase hover:bg-charcoal-light transition-colors"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant || 'default'}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-sand/30 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-charcoal leading-tight">
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-warm-gray mt-1">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-1 text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-sm font-semibold text-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartCount > 0 && (
          <div className="border-t border-sand px-6 py-6 bg-ivory">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="text-lg font-semibold text-charcoal">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            {/* Shipping Note */}
            <p className="text-xs text-warm-gray mb-6">
              Shipping & taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <button
              className="w-full py-4 bg-gold text-charcoal text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="inline-block w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
              ) : (
                'Proceed to Checkout'
              )}
            </button>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full mt-3 py-3 text-xs font-medium tracking-[0.1em] uppercase text-warm-gray hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
