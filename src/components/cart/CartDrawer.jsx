import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    isOpen,
    items,
    totalItems,
    totalPrice,
    removeFromCart,
    updateQuantity,
    toggleCart,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E4DF]">
            <h2 className="font-serif text-xl">
              Cart ({totalItems})
            </h2>
            <button
              onClick={toggleCart}
              className="text-[#1A1A1A] hover:text-[#C9A96E] transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-[#8A8580] mb-4">Your cart is empty</p>
                <button
                  onClick={toggleCart}
                  className="btn-premium-outline text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex space-x-4">
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.id}`}
                      onClick={toggleCart}
                      className="flex-shrink-0"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={toggleCart}
                        className="product-name text-[#1A1A1A] hover:text-[#C9A96E] transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-[#8A8580] mt-1">{item.material}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-medium">${item.price}</span>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-xs text-[#8A8580] hover:text-red-500 transition-colors"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center space-x-2 mt-3">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-8 h-8 border border-[#E8E4DF] flex items-center justify-center hover:border-[#C9A96E] transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-8 h-8 border border-[#E8E4DF] flex items-center justify-center hover:border-[#C9A96E] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[#E8E4DF] p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between font-serif text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                onClick={toggleCart}
                className="btn-premium-solid w-full text-center block"
              >
                Checkout
              </Link>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full text-sm text-[#8A8580] hover:text-red-500 transition-colors text-center"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
