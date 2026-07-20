import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import strkImgConfig from '../strk-img-config.json';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <div ref={containerRef}>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-ivory z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warmGray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-charcoal" />
            <h2 className="font-serif text-xl tracking-wider text-charcoal">
              Your Cart
            </h2>
            <span className="text-xs text-warmGray-400 font-sans">
              ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-warmGray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={20} className="text-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-warmGray-300 mb-4" />
              <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-warmGray-400 mb-6">
                Looks like you haven&apos;t added anything yet.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-gold inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.color}`}
                  className="flex gap-4 pb-6 border-b border-warmGray-100 last:border-0"
                >
                  {/* Image */}
                  <div className="w-20 h-24 bg-champagne rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-wider text-charcoal truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-warmGray-400 mt-1 capitalize">
                      {item.color} · 18K Gold Plated
                    </p>
                    <p className="text-sm font-medium text-charcoal mt-2">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                        className="w-7 h-7 border border-warmGray-300 rounded flex items-center justify-center hover:border-gold-500 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                        className="w-7 h-7 border border-warmGray-300 rounded flex items-center justify-center hover:border-gold-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Remove & total */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id, item.color)}
                      className="text-warmGray-400 hover:text-charcoal transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                    <p className="text-sm font-medium text-charcoal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-warmGray-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-warmGray-500">Subtotal</span>
              <span className="font-serif text-lg font-medium text-charcoal">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-warmGray-400">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-gold py-4">
              Checkout — ${totalPrice.toFixed(2)}
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs tracking-ultra-wide uppercase text-warmGray-500 hover:text-gold-500 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
