import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

const formatPrice = (n) => `$${n.toFixed(2)}`;

const CartDrawer = () => {
  const { isOpen, closeCart, items, subtotal, updateQty, removeItem } = useCart();
  const containerRef = useRef(null);

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

  useEffect(() => {
    if (!isOpen) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-velmora-ink/50 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel */}
      <aside
        ref={containerRef}
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-velmora-cream shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-line">
          <h2 className="font-serif text-2xl text-velmora-ink">Your Bag</h2>
          <button aria-label="Close cart" onClick={closeCart} className="p-1 hover:opacity-60">
            <X className="w-5 h-5 text-velmora-ink" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="font-serif text-2xl text-velmora-ink">Your bag is empty</p>
            <p className="mt-3 text-velmora-muted text-sm leading-relaxed max-w-xs">
              Discover our latest demi-fine pieces, crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-block bg-velmora-ink text-velmora-cream px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-velmora-gold-dark transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-velmora-line">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-5">
                  <div className="w-20 h-24 bg-velmora-soft overflow-hidden flex-shrink-0">
                    {/* Reuses the same imgId as the product card so it inherits
                        the resolved image from the strk-img config. */}
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={item.imgQueryPrimary}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-velmora-ink uppercase text-xs tracking-[0.2em] truncate">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-velmora-muted">{item.variant}</p>
                      </div>
                      <button
                        aria-label="Remove item"
                        onClick={() => removeItem(item.key)}
                        className="text-velmora-muted hover:text-velmora-ink"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-line">
                        <button
                          aria-label="Decrease"
                          onClick={() => updateQty(item.key, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-velmora-soft"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          aria-label="Increase"
                          onClick={() => updateQty(item.key, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-velmora-soft"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-velmora-ink text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-line px-6 py-6 bg-velmora-cream">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-[0.25em] text-velmora-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-velmora-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-velmora-muted mb-5">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                className="w-full bg-velmora-ink text-velmora-cream py-4 text-xs uppercase tracking-[0.25em] hover:bg-velmora-gold-dark transition-colors"
                onClick={() => alert('Checkout integration coming soon.')}
              >
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 py-3 text-xs uppercase tracking-[0.25em] text-velmora-muted hover:text-velmora-ink"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
