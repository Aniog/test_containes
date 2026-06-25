import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';

export default function CartDrawer() {
  const { isOpen, close, items, updateQty, removeItem, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={close}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-label="Your cart"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream text-ink shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl tracking-[0.25em]">YOUR CART</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="text-mocha hover:text-ink"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-2xl text-ink">Your cart is empty.</p>
              <p className="mt-3 max-w-xs text-sm text-mocha">
                Begin with a piece that catches the light.
              </p>
              <Link
                to="/shop"
                onClick={close}
                className="mt-8 bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-ink-soft"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((it, idx) => (
                <li key={it.key} className="flex gap-4">
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-ivory">
                    <img
                      alt={it.name}
                      data-strk-img-id={`pc-${it.id}-primary-9k2x`}
                      data-strk-img={`${it.category || ''} ${it.name} luxury gold jewelry editorial photography warm light`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-ink">
                          {it.name}
                        </h3>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-mocha">
                          {it.tone}
                        </p>
                      </div>
                      <p className="text-sm text-ink">
                        {formatPrice(it.price * it.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-3 py-1.5 text-mocha hover:text-ink"
                          onClick={() => updateQty(it.key, it.qty - 1)}
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="min-w-8 text-center text-sm">{it.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-3 py-1.5 text-mocha hover:text-ink"
                          onClick={() => updateQty(it.key, it.qty + 1)}
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(it.key)}
                        aria-label="Remove item"
                        className="text-mocha hover:text-ink"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-6">
            <div className="flex items-center justify-between pb-2">
              <span className="text-[11px] uppercase tracking-[0.3em] text-mocha">
                Subtotal
              </span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="pb-5 text-[11px] tracking-wide text-mocha">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full bg-ink py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-ink-soft"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={close}
              className="mt-3 block w-full text-center text-[11px] uppercase tracking-[0.3em] text-mocha hover:text-ink"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
