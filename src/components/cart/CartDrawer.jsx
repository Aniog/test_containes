import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, closeCart, removeItem, updateQuantity } = useCart();
  const drawerRef = useRef(null);
  const navigate = useNavigate();

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

  const handleContinueShopping = () => {
    closeCart();
    navigate('/shop');
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] transition-all duration-400',
        isOpen ? 'visible' : 'invisible'
      )}
    >
      {/* Overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-charcoal-900/50 transition-opacity duration-400',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={closeCart}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className={cn(
          'absolute top-0 right-0 h-full w-full max-w-md bg-cream-50 shadow-elevated',
          'transition-transform duration-400 ease-luxury flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-charcoal-800" />
            <h2 className="text-heading-3 text-charcoal-800">
              Your Cart
            </h2>
            <span className="text-body-sm text-charcoal-400">({totalItems})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 hover:bg-cream-200 transition-colors rounded"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal-600" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
              <p className="text-body-lg text-charcoal-600 font-medium mb-2">Your cart is empty</p>
              <p className="text-body-sm text-charcoal-400 mb-6">Looks like you haven't added anything yet.</p>
              <button onClick={handleContinueShopping} className="btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-charcoal-100 last:border-b-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-cream-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-charcoal-400" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-product-name text-body-sm text-charcoal-800 truncate">
                      {item.name}
                    </h3>
                    <p className="text-body-sm text-charcoal-400 mt-0.5 capitalize">{item.variant}</p>
                    <p className="text-body font-medium text-charcoal-800 mt-1">{formatPrice(item.price)}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-charcoal-200 rounded hover:border-charcoal-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-charcoal-600" />
                      </button>
                      <span className="text-body-sm font-medium text-charcoal-800 w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-charcoal-200 rounded hover:border-charcoal-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-charcoal-600" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="p-1 self-start hover:bg-cream-200 transition-colors rounded"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4 text-charcoal-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-charcoal-200 bg-cream-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-body text-charcoal-600">Subtotal</span>
              <span className="text-body-lg font-medium text-charcoal-800">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-body-sm text-charcoal-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full btn-primary py-4 text-center">
              Checkout — {formatPrice(totalPrice)}
            </button>
            <button
              onClick={handleContinueShopping}
              className="w-full mt-3 text-body-sm text-charcoal-600 hover:text-charcoal-800 transition-colors text-center py-2 uppercase tracking-wider"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
