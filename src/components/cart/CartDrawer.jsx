import React, { useEffect, useState } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn, resolveStrkImgUrl } from '@/lib/utils';
import { Link } from 'react-router-dom';

function CartItemImage({ item }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const url = resolveStrkImgUrl(item.imgIdPrimary);
    if (url) setSrc(url);
  }, [item.imgIdPrimary]);

  if (!src) {
    return <div className="w-full h-full bg-warm-100 animate-pulse" />;
  }

  return (
    <img
      className="w-full h-full object-cover"
      src={src}
      alt={item.name}
    />
  );
}

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeItem, updateQuantity, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl',
          'transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-warm-200">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-warm-700" />
              <h2 className="font-serif text-lg tracking-widest uppercase text-warm-800">
                Your Cart
              </h2>
              <span className="text-xs text-warm-400 font-sans">({totalItems} items)</span>
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-warm-50 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-warm-600" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-warm-200 mb-4" />
                <p className="font-serif text-lg text-warm-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-warm-400 mb-6">Discover our curated collection</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="bg-warm-800 text-white font-sans text-xs tracking-widest uppercase py-3 px-8 hover:bg-gold transition-colors duration-300"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.color}`}
                    className="flex gap-4 pb-6 border-b border-warm-100 last:border-0"
                  >
                    {/* Product image */}
                    <div className="w-20 h-20 bg-warm-50 rounded-lg flex-shrink-0 overflow-hidden">
                      <CartItemImage item={item} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wider uppercase text-warm-800 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warm-400 mt-0.5 capitalize">{item.color} tone</p>
                      <p className="font-sans text-sm font-medium text-warm-700 mt-1">
                        {formatPrice(item.price)}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warm-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            className="p-1.5 hover:bg-warm-50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 text-warm-500" />
                          </button>
                          <span className="px-3 py-1 text-sm font-sans text-warm-700 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            className="p-1.5 hover:bg-warm-50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 text-warm-500" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="text-xs text-warm-400 hover:text-red-500 transition-colors underline"
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
            <div className="border-t border-warm-200 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-warm-500">Subtotal</span>
                <span className="font-serif text-lg text-warm-800">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-warm-400">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-warm-800 text-white font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold transition-colors duration-300">
                Checkout — {formatPrice(totalPrice)}
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs text-warm-400 hover:text-gold transition-colors underline"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
