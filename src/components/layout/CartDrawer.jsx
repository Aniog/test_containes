// Velmora Fine Jewelry - Cart Drawer Component
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    isLoading,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#FAF8F5] z-50 animate-slide-in-right shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E2D9]">
          <h2
            className="text-lg font-serif tracking-[0.1em] text-[#1A1A1A]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            YOUR BAG
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-[#1A1A1A] hover:text-[#B8860B] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Content */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag size={48} strokeWidth={1} className="text-[#E8E2D9] mb-4" />
            <p
              className="text-[#6B6560] text-center mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Your bag is empty
            </p>
            <button
              onClick={closeCart}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.variant || 'default'}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-30 bg-[#F5F2EE] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3
                            className="text-sm font-serif font-semibold uppercase tracking-[0.1em] text-[#1A1A1A] leading-tight"
                            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                          >
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="text-xs text-[#6B6560] mt-1">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="p-1 text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={16} strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="mt-auto pt-3 flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-[#E8E2D9]">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 hover:bg-[#F5F2EE] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={1.5} />
                          </button>
                          <span
                            className="w-10 text-center text-sm font-medium text-[#1A1A1A]"
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 hover:bg-[#F5F2EE] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* Price */}
                        <p
                          className="text-sm font-semibold text-[#1A1A1A]"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#E8E2D9] px-6 py-6 bg-white">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-2">
                <span
                  className="text-sm text-[#6B6560] uppercase tracking-wide"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Subtotal
                </span>
                <span
                  className="text-lg font-semibold text-[#1A1A1A]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {formatPrice(getCartTotal())}
                </span>
              </div>

              <p
                className="text-xs text-[#6B6560] mb-6"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button
                className="w-full btn-primary mb-3"
                disabled={isLoading}
              >
                {isLoading ? 'Adding...' : 'Proceed to Checkout'}
              </button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full btn-secondary"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
