import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface-secondary z-50 transform transition-transform duration-400 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/10">
          <h2 className="font-serif text-xl tracking-wide text-brand-100">Your Cart</h2>
          <button
            onClick={closeDrawer}
            className="text-brand-400 hover:text-brand-100 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-brand-700 mb-4" strokeWidth={1} />
              <p className="text-brand-400 text-sm mb-6">Your cart is empty</p>
              <button onClick={closeDrawer} className="btn-outline text-xs">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-gold/8"
                >
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-surface-card flex-shrink-0 flex items-center justify-center">
                    <span className="text-brand-600 text-[10px] uppercase tracking-wider">
                      {item.name?.split(' ')[0]}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm text-brand-100 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-500 mt-1 capitalize">
                      {item.variant}
                    </p>
                    <p className="text-gold text-sm font-medium mt-2">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-brand-700 flex items-center justify-center text-brand-400 hover:text-brand-100 hover:border-gold/40 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm text-brand-200 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-brand-700 flex items-center justify-center text-brand-400 hover:text-brand-100 hover:border-gold/40 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-600 hover:text-gold underline transition-colors"
                      >
                        Remove
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
          <div className="border-t border-gold/10 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-400 uppercase tracking-wider">Subtotal</span>
              <span className="text-lg font-serif text-brand-100">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-600 mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-gold w-full">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-center text-xs text-brand-400 hover:text-gold mt-3 transition-colors uppercase tracking-wider"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
