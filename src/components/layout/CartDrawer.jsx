import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { isOpen, closeCart, items, setQuantity, removeItem, subtotal } = useCart();

  // Lock body scroll when open
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

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[70] transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={cn(
          'absolute top-0 right-0 bottom-0 w-full sm:w-[460px] bg-cream shadow-velmora-lg transition-transform duration-400 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-8 h-20 border-b border-hairline flex-shrink-0">
          <div>
            <p className="eyebrow">Your Bag</p>
            <p className="font-serif text-2xl text-ink mt-1">
              {items.length === 0 ? 'Empty' : `${items.length} ${items.length === 1 ? 'piece' : 'pieces'}`}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="p-2 -mr-2 text-ink hover:text-charcoal"
            onClick={closeCart}
          >
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="w-10 h-10 text-muted mb-6" strokeWidth={1} />
            <p className="font-serif text-2xl text-ink mb-3">Your bag is empty</p>
            <p className="text-sm text-charcoal max-w-[280px] mb-8 leading-relaxed">
              Pieces you add will be saved here. Begin with our bestsellers.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 md:px-8 divide-y divide-hairline">
              {items.map((item) => {
                const { product, variant, quantity, lineTotal, key } = item;
                const pid = product.id;
                return (
                  <article
                    key={key}
                    className="py-6 flex gap-5 first:pt-6"
                    id={`cart-item-${pid}`}
                  >
                    {/* Thumb */}
                    <Link
                      to={`/product/${pid}`}
                      onClick={closeCart}
                      className="w-24 h-28 bg-sand overflow-hidden flex-shrink-0 hover-zoom"
                      aria-label={`View ${product.name}`}
                    >
                      <img
                        alt={product.name}
                        data-strk-img-id={`cart-${pid}`}
                        data-strk-img={`[cart-item-${pid}-name] [cart-item-${pid}-variant]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${pid}`}
                            onClick={closeCart}
                            className="product-name text-[0.78rem] text-ink hover:text-charcoal"
                            id={`cart-item-${pid}-name`}
                          >
                            {product.name}
                          </Link>
                          <p
                            className="label-light mt-1"
                            id={`cart-item-${pid}-variant`}
                          >
                            {variant.label}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-ink whitespace-nowrap">
                          {formatPrice(lineTotal)}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 flex items-center justify-between">
                        {/* Quantity */}
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="w-8 h-8 flex items-center justify-center text-ink hover:text-charcoal"
                            onClick={() => setQuantity(key, quantity - 1)}
                          >
                            <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm">{quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="w-8 h-8 flex items-center justify-center text-ink hover:text-charcoal"
                            onClick={() => setQuantity(key, quantity + 1)}
                          >
                            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(key)}
                          className="text-xs text-muted hover:text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 border-t border-hairline bg-cream">
              <div className="px-6 md:px-8 pt-6 pb-2">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="label">Subtotal</span>
                  <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-muted">
                  Shipping and taxes calculated at checkout. Free worldwide shipping on orders over $75.
                </p>
              </div>
              <div className="px-6 md:px-8 pt-4 pb-8">
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="btn-primary w-full"
                >
                  Checkout
                </Link>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full text-center mt-4 text-xs text-muted hover:text-charcoal tracking-wide uppercase tracking-[0.18em]"
                >
                  or continue shopping
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}