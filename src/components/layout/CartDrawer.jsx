import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'var(--color-sand)' }}>
          <h2 className="font-serif text-lg tracking-wide">
            YOUR BAG ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 transition-colors hover:text-[var(--color-gold-dark)]"
            style={{ color: 'var(--color-espresso)' }}
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 mb-4" style={{ color: 'var(--color-sand)' }} />
            <p className="text-center mb-6" style={{ color: 'var(--color-taupe)' }}>
              Your bag is empty
            </p>
            <button
              onClick={closeCart}
              className="btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${item.variant}-${index}`}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden" style={{ backgroundColor: 'var(--color-sand)' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-title text-sm leading-tight">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs mt-1" style={{ color: 'var(--color-taupe)' }}>
                          {item.variant}
                        </p>
                      )}
                      <p className="font-medium mt-2">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity & Remove */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border" style={{ borderColor: 'var(--color-sand)' }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 transition-colors hover:bg-[var(--color-sand)]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 transition-colors hover:bg-[var(--color-sand)]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs underline transition-colors hover:text-[var(--color-gold-dark)]"
                          style={{ color: 'var(--color-taupe)' }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t px-6 py-6" style={{ borderColor: 'var(--color-sand)' }}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm" style={{ color: 'var(--color-taupe)' }}>
                  Subtotal
                </span>
                <span className="font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs mb-4" style={{ color: 'var(--color-taupe)' }}>
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-primary w-full mb-3">
                CHECKOUT
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-sm underline transition-colors hover:text-[var(--color-gold-dark)]"
                style={{ color: 'var(--color-espresso)' }}
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
