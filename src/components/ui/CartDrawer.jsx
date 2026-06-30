import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/60 z-50 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-50 z-50 animate-slide-in-right shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-charcoal-200">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 text-charcoal-300 mb-6" />
            <p className="text-charcoal-500 mb-8">Your bag is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex gap-4 pb-6 border-b border-charcoal-100"
                  >
                    {/* Image */}
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="w-24 h-32 bg-charcoal-100 flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Link
                            to={`/product/${item.slug}`}
                            onClick={closeCart}
                            className="font-serif text-sm tracking-wide uppercase hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-xs text-charcoal-500 mt-1">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="p-1 -mr-1 text-charcoal-400 hover:text-charcoal-900 transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        {/* Quantity */}
                        <div className="flex items-center border border-charcoal-200">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-2 hover:bg-charcoal-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-2 hover:bg-charcoal-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-charcoal-200 px-6 py-6 bg-cream-50">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-charcoal-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-500 mb-6">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="w-full btn-accent py-4 mb-3">
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-charcoal-600 hover:text-charcoal-900 transition-colors py-2"
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
