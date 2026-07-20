import React, { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

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

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-base/40 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-wide">YOUR CART</h2>
          <button onClick={closeCart} aria-label="Close cart">
            <X className="w-5 h-5 text-muted hover:text-base transition-colors" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="w-12 h-12 text-border" />
              <p className="text-muted font-sans">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block bg-gold text-white px-6 py-3 text-sm tracking-wide uppercase hover:bg-gold-hover transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-cream flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://placehold.co/120x120/FAF7F2/C5A059?text=${encodeURIComponent(
                        item.name.split(' ').map((w) => w[0]).join('')
                      )}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-sm tracking-product uppercase hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-muted mt-1 capitalize">
                        {item.variant} tone
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          className="w-7 h-7 flex items-center justify-center hover:bg-cream transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          className="w-7 h-7 flex items-center justify-center hover:bg-cream transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start text-muted hover:text-base transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border bg-cream/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-muted">Subtotal</span>
              <span className="text-lg font-serif font-semibold">${subtotal}</span>
            </div>
            <p className="text-xs text-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-gold text-white py-3.5 text-sm tracking-wide uppercase font-medium hover:bg-gold-hover transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 border border-base text-base py-3.5 text-sm tracking-wide uppercase font-medium hover:bg-base hover:text-white transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
