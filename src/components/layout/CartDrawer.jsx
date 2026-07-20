import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, closeCart, removeItem, updateQuantity } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-velvet-50 shadow-elevated animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
          <h2 className="font-serif text-xl tracking-wider text-velvet-950">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-velvet-500 hover:text-velvet-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
              <p className="font-serif text-lg text-velvet-700 mb-2">Your cart is empty</p>
              <p className="text-sm text-velvet-500 mb-6">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-velvet-100 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-velvet-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={`[product-name-${item.id}] gold jewelry`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 id={`product-name-${item.id}`} className="text-product-name text-sm text-velvet-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velvet-500 mt-0.5 capitalize">
                      {item.variant?.replace('-', ' ')}
                    </p>
                    <p className="text-sm font-medium text-velvet-900 mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-velvet-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-velvet-500 hover:text-velvet-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm font-medium text-velvet-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-velvet-500 hover:text-velvet-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-velvet-500 hover:text-red-600 underline transition-colors"
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
          <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-overline text-velvet-600">Subtotal</span>
              <span className="font-serif text-lg text-velvet-950">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-velvet-500">Shipping calculated at checkout</p>

            {/* Checkout button */}
            <button className="btn-primary w-full">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-overline text-velvet-600 hover:text-velvet-900 transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
