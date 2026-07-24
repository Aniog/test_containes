import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice, cn } from '../../lib/utils';
import { products } from '../../data/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeCart(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  const getProduct = (productId) => products.find((p) => p.id === productId);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-[420px] bg-cream-50 z-[70] shadow-drawer transition-transform duration-350 ease-luxury flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300/50">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
            <h2 className="font-serif text-section text-charcoal">
              Your Bag
            </h2>
            <span className="font-sans text-caption text-taupe">({totalItems})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-cream-400 mb-4" strokeWidth={1} />
              <p className="font-serif text-section text-charcoal mb-2">Your bag is empty</p>
              <p className="font-sans text-body text-taupe mb-6">
                Looks like you haven't added anything yet.
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 border border-charcoal text-charcoal font-sans text-caption uppercase tracking-ultra-wide hover:bg-charcoal hover:text-cream-100 transition-all duration-300 rounded"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const product = getProduct(item.productId);
                return (
                  <div key={item.key} className="flex gap-4 py-4 border-b border-cream-200/60 last:border-0">
                    {/* Product thumbnail */}
                    <div className="w-20 h-20 bg-cream-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-gold-100 to-cream-200 flex items-center justify-center">
                        <span className="font-serif text-xs text-gold/50 uppercase tracking-wider">VELMORA</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-ultra-wide uppercase text-charcoal truncate">
                        {item.name}
                      </h3>
                      <p className="font-sans text-caption text-taupe mt-0.5">{item.variant}</p>
                      <p className="font-sans text-body font-medium text-charcoal mt-1">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-cream-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-sans text-caption text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="font-sans text-caption text-taupe hover:text-charcoal underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Line total */}
                    <div className="text-right flex-shrink-0">
                      <p className="font-sans text-body font-medium text-charcoal">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-cream-300/50 bg-cream-50">
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-body text-taupe">Subtotal</span>
              <span className="font-sans text-body font-medium text-charcoal">{formatPrice(subtotal)}</span>
            </div>
            <p className="font-sans text-caption text-taupe mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button
              className="w-full py-3.5 bg-charcoal hover:bg-charcoal-light text-cream-100 font-sans text-caption uppercase tracking-ultra-wide transition-colors duration-300 rounded"
              onClick={() => {
                alert('Checkout coming soon!');
              }}
            >
              Checkout — {formatPrice(subtotal)}
            </button>
            <button
              onClick={closeCart}
              className="w-full py-2.5 mt-2 text-charcoal/60 hover:text-charcoal font-sans text-caption uppercase tracking-ultra-wide transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
