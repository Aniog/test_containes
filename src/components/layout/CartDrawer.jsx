import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';

export default function CartDrawer() {
  const { cartItems, subtotal, isOpen, closeCart, removeItem, updateQuantity } = useCart();
  const drawerRef = useRef(null);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap and escape key handling
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transform transition-transform duration-300 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
          <h2 className="font-serif text-xl text-espresso">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-ivory flex items-center justify-center mb-6">
              <ShoppingBag size={32} strokeWidth={1.5} className="text-stone" />
            </div>
            <p className="font-serif text-lg text-espresso mb-2">Your bag is empty</p>
            <p className="text-stone text-sm mb-8">
              Discover our collection of demi-fine gold jewelry
            </p>
            <Link
              to="/collection"
              onClick={closeCart}
              className="btn-primary inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={`${item.productId}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="w-24 h-28 bg-ivory flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="block"
                      >
                        <h3 className="product-name text-sm leading-tight mb-1">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-stone text-sm mb-3">
                        {item.variant.charAt(0).toUpperCase() + item.variant.slice(1)}
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-taupe">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variant,
                                item.quantity - 1
                              )
                            }
                            className="p-2 text-stone hover:text-espresso transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variant,
                                item.quantity + 1
                              )
                            }
                            className="p-2 text-stone hover:text-espresso transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-sans font-medium text-espresso">
                          {formatPrice(item.subtotal)}
                        </p>
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="mt-2 text-xs text-stone hover:text-gold transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-taupe px-6 py-6 bg-white">
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-stone">Subtotal</span>
                <span className="font-serif text-xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-stone mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-center text-sm text-stone hover:text-gold transition-colors"
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
