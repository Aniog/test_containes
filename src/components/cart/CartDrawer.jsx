import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, totalPrice, totalItems, closeCart, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-velmora-950/50 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-100">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-velmora-600" />
            <h2 className="font-serif text-xl tracking-wide text-velmora-900">
              Your Cart
            </h2>
            <span className="text-xs text-velmora-400 bg-velmora-100 px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-500 hover:text-velmora-900 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-200 mb-4" />
              <p className="font-serif text-lg text-velmora-600 mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-400 mb-6">Discover our curated collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block bg-velmora-900 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-gold transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 p-3 bg-white rounded-lg border border-velmora-100"
                >
                  <div className="w-20 h-20 bg-velmora-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-product uppercase text-velmora-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-400 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-velmora-900 mt-1">${item.price}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-velmora-50 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-velmora-500 hover:text-velmora-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center text-velmora-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-velmora-500 hover:text-velmora-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1.5 text-velmora-300 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
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
          <div className="px-6 py-5 border-t border-velmora-100 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-500">Subtotal</span>
              <span className="text-lg font-serif tracking-wide text-velmora-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-400 mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-900 text-white py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-gold transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 py-2 text-sm text-velmora-500 hover:text-velmora-900 transition-colors tracking-wide"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
