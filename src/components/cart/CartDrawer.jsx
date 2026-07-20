import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { useToast } from '@/components/ui/Toast';

function CartItemImage({ product, variantId }) {
  const variant = product.images[variantId] || product.images[product.defaultVariant];
  const img = variant?.primary;
  if (!img) return <div className="h-full w-full bg-linen" />;
  return (
    <div className="relative h-full w-full overflow-hidden bg-linen">
      <img
        alt={product.name}
        data-strk-img-id={img.id}
        data-strk-img={img.query}
        data-strk-img-ratio={img.ratio}
        data-strk-img-width="240"
        loading="lazy"
        decoding="async"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    setQty,
    removeItem,
    subtotal,
    lineKey,
  } = useCart();
  const { push } = useToast();
  const drawerRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Focus the close button for keyboard users
      setTimeout(() => closeBtnRef.current?.focus(), 50);
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Populate stock images for cart line items when the drawer opens
  // or the cart contents change.
  useEffect(() => {
    if (!isOpen) return;
    const container = drawerRef.current;
    if (!container) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, container);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items.length]);

  // Escape closes
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-[90] bg-espresso/40 transition-opacity duration-500',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      />
      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={cn(
          'fixed inset-y-0 right-0 z-[95] flex w-full max-w-md flex-col bg-bone shadow-[0_24px_60px_-20px_rgba(27,20,16,0.25)] transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-4 w-4 text-espresso" strokeWidth={1.25} />
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
              Your Bag
              <span className="ml-2 text-mink">({items.length})</span>
            </span>
          </div>
          <button
            ref={closeBtnRef}
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 text-mink hover:text-espresso"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="font-serif text-2xl italic text-espresso">
              Your bag is empty.
            </div>
            <p className="mt-3 text-sm text-mink">
              Discover demi-fine pieces, hand-finished in 18K gold plate.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center gap-2 border border-espresso px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.24em] text-espresso transition-colors duration-300 hover:bg-espresso hover:text-bone"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-2 scrollbar-thin">
              {items.map((item) => {
                const variantLabel =
                  item.product.variants.find((v) => v.id === item.variantId)?.label ||
                  item.variantId;
                return (
                  <li
                    key={lineKey(item.productId, item.variantId)}
                    className="flex gap-4 border-b border-sand py-5"
                  >
                    <div className="h-28 w-24 flex-shrink-0">
                      <CartItemImage product={item.product} variantId={item.variantId} />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${item.product.id}`}
                            onClick={closeCart}
                            className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso hover:text-gold-deep"
                          >
                            {item.product.name}
                          </Link>
                          <div className="mt-1 text-[11px] text-mink">
                            {variantLabel}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-espresso">
                          {formatPrice(item.product.price * item.qty)}
                        </div>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-sand">
                          <button
                            onClick={() => setQty(lineKey(item.productId, item.variantId), item.qty - 1)}
                            aria-label="Decrease quantity"
                            className="p-1.5 text-mink hover:text-espresso"
                          >
                            <Minus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                          <span className="min-w-7 text-center text-xs font-medium tabular-nums text-espresso">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => setQty(lineKey(item.productId, item.variantId), item.qty + 1)}
                            aria-label="Increase quantity"
                            className="p-1.5 text-mink hover:text-espresso"
                          >
                            <Plus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            removeItem(lineKey(item.productId, item.variantId));
                            push({ title: 'Removed from bag' });
                          }}
                          className="text-[10px] uppercase tracking-[0.2em] text-stone hover:text-espresso"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-sand bg-linen/40 px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-mink">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-mink">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                onClick={() => {
                  push({
                    title: 'Checkout coming soon',
                    description: 'This is a preview — connect Stripe to enable checkout.',
                  });
                }}
                className="mt-5 block w-full bg-espresso py-4 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-bone transition-colors duration-300 hover:bg-gold-deep"
              >
                Checkout · {formatPrice(subtotal)}
              </button>
              <button
                onClick={closeCart}
                className="mt-3 block w-full py-2 text-center text-[10px] uppercase tracking-[0.2em] text-mink hover:text-espresso"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
