import React from 'react';
import { X, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    isOpen,
    items,
    closeCart,
    removeItem,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal-900/50 z-50 cart-drawer-overlay"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 cart-drawer-panel ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-charcoal-900/10">
            <h2 className="font-serif text-2xl">
              Your Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-charcoal-500 mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-premium btn-premium-outline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex gap-4 pb-6 border-b border-charcoal-900/10"
                  >
                    {/* Image */}
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="w-24 h-24 flex-shrink-0 overflow-hidden bg-cream-100"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="product-name text-sm text-charcoal-900 hover:opacity-70"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-charcoal-500 mt-1">{item.variant}</p>
                      <p className="text-sm font-medium text-charcoal-900 mt-2">
                        ${item.price}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-6 h-6 border border-charcoal-900/30 flex items-center justify-center hover:border-charcoal-900"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-6 h-6 border border-charcoal-900/30 flex items-center justify-center hover:border-charcoal-900"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="ml-auto text-xs text-charcoal-500 hover:text-charcoal-900"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-charcoal-900/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm tracking-wider uppercase">Total</span>
                  <span className="text-xl font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="btn-premium btn-premium-solid w-full">
                  Checkout
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-sm text-charcoal-500 hover:text-charcoal-900"
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
}
