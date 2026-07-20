import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isOpen, items, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-velmora-cream shadow-drawer flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-gold/20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
            <h2 className="font-cormorant text-xl font-medium tracking-[0.1em] text-velmora-ink">
              Your Cart
              {itemCount > 0 && (
                <span className="font-inter text-sm font-normal text-velmora-muted ml-2">({itemCount})</span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-velmora-muted hover:text-velmora-ink transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-gold/40" strokeWidth={1} />
              <p className="font-cormorant text-2xl font-light text-velmora-ink">Your cart is empty</p>
              <p className="font-inter text-sm text-velmora-muted">Discover our curated collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-2 font-inter text-xs tracking-[0.12em] uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-ink transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-velmora-gold/15">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="py-5 flex gap-4">
                  {/* Product image */}
                  <div className="w-20 h-24 bg-velmora-stone flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[cart-item-${item.id}-name]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-item-${item.id}-name`}
                      className="font-cormorant text-base font-medium tracking-[0.08em] uppercase text-velmora-ink leading-tight"
                    >
                      {item.name}
                    </p>
                    <p className="font-inter text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    <p className="font-inter text-sm font-medium text-velmora-ink mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-6 h-6 border border-velmora-gold/40 flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-ink transition-colors"
                      >
                        <Minus className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                      <span className="font-inter text-sm text-velmora-ink w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-6 h-6 border border-velmora-gold/40 flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-ink transition-colors"
                      >
                        <Plus className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto font-inter text-xs text-velmora-muted hover:text-velmora-ink underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-velmora-gold/20 bg-velmora-stone/50">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs tracking-[0.1em] uppercase text-velmora-muted">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-velmora-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-velmora-muted mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-ink text-velmora-cream font-inter text-xs tracking-[0.15em] uppercase py-4 hover:bg-velmora-charcoal transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 font-inter text-xs tracking-[0.1em] uppercase text-velmora-muted hover:text-velmora-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
