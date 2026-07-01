import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-overlay animate-fadeInFast"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-surface z-50 flex flex-col animate-slideInRight shadow-2xl"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-velmora-gold" />
            <h2 className="font-serif text-lg font-light tracking-widest text-velmora-ink uppercase">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="text-xs text-velmora-muted font-sans">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-velmora-muted hover:text-velmora-ink transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-velmora-whisper" />
              <p className="font-serif text-xl font-light text-velmora-muted">Your cart is empty</p>
              <p className="text-xs text-velmora-whisper font-sans uppercase tracking-widest">
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-velmora-gold text-velmora-gold text-xs uppercase tracking-widest font-semibold px-8 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-200"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-border last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-stone flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[cart-item-${item.key}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span id={`cart-item-${item.key}-name`} className="sr-only">{item.product.name} gold jewelry</span>
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-sm uppercase tracking-widest text-velmora-ink hover:text-velmora-gold transition-colors block truncate"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-velmora-muted font-sans mt-0.5">{item.variant}</p>
                    <p className="text-sm font-semibold text-velmora-ink font-sans mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-sans text-velmora-ink w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    aria-label="Remove item"
                    className="text-velmora-whisper hover:text-velmora-muted transition-colors self-start mt-1"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-velmora-border bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs uppercase tracking-widest text-velmora-muted font-sans">Subtotal</span>
              <span className="font-serif text-xl font-light text-velmora-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-whisper font-sans mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian text-xs uppercase tracking-widest font-semibold py-4 hover:bg-velmora-gold-dark transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-velmora-border text-velmora-muted text-xs uppercase tracking-widest font-semibold py-3 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
