import { useState, useEffect, useCallback } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

function getProduct(productId) {
  return products.find((p) => p.id === productId);
}

function getVariant(product, variantId) {
  return product?.variants?.find((v) => v.id === variantId);
}

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, removeItem, updateQuantity, totalItems } = useCart();

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-cart', handler);
    return () => window.removeEventListener('open-cart', handler);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const subtotal = items.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-ink-900/50 backdrop-blur-sm z-[60] transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory-50 z-[70] shadow-2xl transform transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold-200">
          <h2 className="font-serif text-xl tracking-wide text-ink-800">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="p-2 hover:text-gold-500 transition-colors text-ink-600"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ height: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-ink-300 mb-4" />
              <p className="font-serif text-xl text-ink-600 mb-2">Your bag is empty</p>
              <p className="text-sm text-ink-400 mb-6">
                Looks like you haven't added anything yet.
              </p>
              <Link
                to="/shop"
                onClick={() => setOpen(false)}
                className="btn-primary"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const product = getProduct(item.productId);
                const variant = getVariant(product, item.variantId);
                if (!product) return null;

                return (
                  <div
                    key={item.key}
                    className="flex gap-4 pb-6 border-b border-cream"
                  >
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-ivory-200 flex-shrink-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gold-200" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-widest text-ink-800 truncate">
                            {product.name}
                          </h3>
                          {variant && (
                            <p className="text-xs text-ink-400 mt-0.5">{variant.label}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-ink-400 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-ink-200">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="p-1.5 hover:bg-ivory-200 transition-colors text-ink-600"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-ink-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="p-1.5 hover:bg-ivory-200 transition-colors text-ink-600"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <p className="font-sans text-sm font-medium text-ink-800">
                          ${(product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-ivory-50 border-t border-gold-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-ink-600 tracking-wide uppercase">
                Subtotal
              </span>
              <span className="font-sans text-lg font-medium text-ink-800">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-ink-400">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
