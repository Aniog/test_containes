import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-2xl">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="hover:text-velmora-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <ShoppingBag size={64} className="text-velmora-gray-light mb-4" />
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-gray-light mb-8">
                Discover our collection and find something you love
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 mb-6 pb-6 border-b border-velmora-beige"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-velmora-cream flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-base mb-1">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-velmora-gray-light mb-2">
                          {item.variant}
                        </p>
                      )}
                      <p className="font-serif text-lg mb-3">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="self-start hover:text-red-500 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-beige p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-xl">Total</span>
                  <span className="font-serif text-2xl">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => {
                    alert('Checkout functionality coming soon!');
                  }}
                  className="w-full btn-primary mb-3"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-sm text-velmora-gray-light hover:text-velmora-black transition-colors"
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
