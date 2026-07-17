import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    isLoading,
    closeCart,
    updateQuantity,
    removeFromCart,
    getCartTotal,
  } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-ivory z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-sand">
          <h2 className="font-serif text-xl text-espresso">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-taupe" />
            </div>
            <p className="font-serif text-lg text-espresso mb-2">Your bag is empty</p>
            <p className="text-sm text-taupe mb-8">Discover our collection of demi-fine jewelry</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-espresso text-ivory font-body font-medium text-sm tracking-wide hover:bg-charcoal transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-cream rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-serif text-sm text-espresso uppercase tracking-wide">
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="p-1 text-taupe hover:text-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-sand rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-body font-medium text-espresso">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with Totals */}
            <div className="border-t border-sand p-4 md:p-6 bg-cream/50">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-charcoal/70">Subtotal</span>
                <span className="font-body font-medium text-espresso">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-charcoal/70">Shipping</span>
                <span className="text-sm text-charcoal/70">
                  {shipping === 0 ? (
                    <span className="text-gold-600">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-taupe mb-4">
                  Free shipping on orders over $50
                </p>
              )}

              {/* Divider */}
              <div className="h-px bg-sand mb-4" />

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-serif text-lg text-espresso">Total</span>
                <span className="font-serif text-lg text-espresso">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                className="w-full py-4 bg-espresso text-ivory font-body font-medium text-sm tracking-wide hover:bg-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Adding...' : 'Proceed to Checkout'}
              </button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full py-3 mt-3 text-sm text-taupe hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
