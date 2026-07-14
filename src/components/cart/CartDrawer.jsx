import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    isOpen,
    toggleCart,
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={toggleCart}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-velmora-warm-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-light-gray">
            <h2 className="font-serif text-2xl font-light">Your Cart</h2>
            <button
              onClick={toggleCart}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-velmora-medium-gray mb-4" />
                <p className="text-velmora-medium-gray mb-2">Your cart is empty</p>
                <p className="text-sm text-velmora-medium-gray">
                  Discover our collection and find something you love
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    {/* Product Image */}
                    <div className="w-24 h-32 bg-velmora-cream rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-gold mb-3">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 mb-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-velmora-medium-gray hover:text-velmora-charcoal transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-light-gray p-6 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-medium-gray">
                Shipping & taxes calculated at checkout
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to="/cart"
                  onClick={toggleCart}
                  className="block w-full bg-velmora-charcoal text-velmora-warm-white text-center py-3 hover:bg-velmora-gold hover:text-velmora-warm-black transition-all duration-300"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={toggleCart}
                  className="block w-full bg-velmora-gold text-velmora-warm-black text-center py-3 hover:bg-velmora-gold-muted transition-all duration-300"
                >
                  Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-velmora-medium-gray hover:text-velmora-charcoal transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
