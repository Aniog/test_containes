import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[55] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[55] w-full max-w-md bg-warm-white shadow-2xl transform transition-transform duration-500 ease-smooth ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-champagne">
            <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
            <button onClick={closeCart} className="p-2 -mr-2 hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-champagne mb-4" />
                <p className="text-muted text-sm">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-4 text-xs tracking-[0.15em] uppercase font-medium text-gold hover:text-gold-hover transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item, idx) => (
                  <div key={`${item.product.id}-${item.variant.id}`} className="flex gap-4">
                    {/* Product image placeholder */}
                    <div className="w-20 h-24 bg-ivory flex-shrink-0 flex items-center justify-center">
                      <span className="text-champagne text-[10px] tracking-widest uppercase font-medium">{item.product.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.product.id}`}
                        onClick={closeCart}
                        className="font-serif text-sm tracking-wide truncate block hover:text-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-muted text-xs mt-0.5">{item.variant.name}</p>
                      <p className="text-sm font-medium mt-1">${item.product.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-champagne">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-ivory transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-ivory transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant.id)}
                          className="text-muted text-xs underline hover:text-ink transition-colors"
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
            <div className="px-6 py-5 border-t border-champagne">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-ink py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-hover transition-colors duration-300">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center mt-3 text-xs tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors"
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
