import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    cartTotal,
    cartCount,
    removeFromCart,
    updateQuantity,
    closeCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-charcoal/50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`cart-drawer fixed top-0 right-0 h-full w-full sm:w-96 bg-cream z-50 shadow-2xl ${
          isCartOpen ? 'open' : 'closed'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="font-serif text-2xl font-light tracking-wide">
              Your Cart ({cartCount})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-block mt-6 text-gold hover:text-gold-dark transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={closeCart}
                      className="flex-shrink-0"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.product.id}`}
                        onClick={closeCart}
                        className="font-serif text-sm tracking-wider hover:text-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>

                      {item.variant && (
                        <p className="text-xs text-gray-500 mt-1">{item.variant}</p>
                      )}

                      <p className="text-sm font-medium mt-1">${item.product.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.variant, item.quantity - 1)
                          }
                          className="p-1 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.variant, item.quantity + 1)
                          }
                          className="p-1 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id, item.variant)}
                      className="flex-shrink-0 p-1 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-medium">Total</span>
                <span className="font-serif font-medium">${cartTotal.toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-charcoal text-cream text-center py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-colors"
              >
                Proceed to Checkout
              </Link>

              <button
                onClick={closeCart}
                className="block w-full text-center text-sm text-gray-500 hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
