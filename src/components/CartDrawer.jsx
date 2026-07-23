import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
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
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-overlay fixed inset-0 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-cream z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gold/20">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={20} />
              <h2 className="font-serif text-xl">
                Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <ShoppingBag size={64} className="text-taupe mb-4" />
              <p className="text-lg text-taupe mb-2">Your cart is empty</p>
              <p className="text-sm text-taupe mb-8 text-center">
                Discover our collection and find something you'll love.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="bg-charcoal text-cream px-8 py-3 text-sm uppercase tracking-wider hover:bg-gold transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.variant}-${index}`}
                    className="flex space-x-4 mb-6 pb-6 border-b border-gold/20 last:border-0"
                  >
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
                        className="product-name text-sm mb-1 hover:text-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      
                      {item.variant && (
                        <p className="text-xs text-taupe mb-2">{item.variant}</p>
                      )}
                      
                      <p className="text-sm font-light mb-3">
                        ${item.product.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-charcoal/30 flex items-center justify-center hover:border-gold transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-charcoal/30 flex items-center justify-center hover:border-gold transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id, item.variant)}
                      className="flex-shrink-0 text-taupe hover:text-charcoal transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-gold/20 p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-wider">Subtotal</span>
                  <span className="text-xl font-light">${cartTotal.toFixed(2)}</span>
                </div>
                
                <p className="text-xs text-taupe">
                  Shipping & taxes calculated at checkout
                </p>

                {/* Checkout Button */}
                <button
                  className="w-full bg-charcoal text-cream py-4 text-sm uppercase tracking-wider font-medium hover:bg-gold transition-colors duration-300 flex items-center justify-center space-x-2"
                  onClick={() => {
                    alert('Checkout functionality would be implemented here with a payment processor integration.');
                    closeCart();
                  }}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={16} />
                </button>

                {/* Clear Cart */}
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear your cart?')) {
                      clearCart();
                    }
                  }}
                  className="w-full text-sm text-taupe hover:text-charcoal transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
