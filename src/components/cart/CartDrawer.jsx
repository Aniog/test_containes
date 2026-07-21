import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    closeCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl tracking-wide">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="text-black hover:text-yellow-600 transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-4 text-yellow-600 hover:text-black transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.material}`} className="flex space-x-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <h3 className="font-serif text-sm tracking-wide">{item.name}</h3>
                      <p className="text-xs text-gray-500">{item.material}</p>
                      <p className="font-medium">${item.price}</p>

                      {/* Quantity Control */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-yellow-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-yellow-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item)}
                        className="text-xs text-gray-500 hover:text-red-500 transition-colors"
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
            <div className="p-6 border-t space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-yellow-600 text-white py-3 px-6 tracking-wide hover:bg-black transition-colors">
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-sm text-gray-500 hover:text-yellow-600 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
