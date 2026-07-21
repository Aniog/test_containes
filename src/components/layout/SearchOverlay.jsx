import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS, formatPrice } from '@/data/products';

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [open, query]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS.slice(0, 4);
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 animate-fade-in bg-espresso/50 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={containerRef}
        className="max-h-[85vh] overflow-y-auto bg-ivory px-5 pb-8 pt-24 md:px-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Search"
      >
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 border-b border-ink/25 pb-4 focus-within:border-bronze">
            <Search className="h-5 w-5 shrink-0 text-bronze" strokeWidth={1.5} />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, necklaces, huggies…"
              className="w-full bg-transparent font-serif text-2xl font-light text-ink outline-none placeholder:text-taupe/60 md:text-3xl"
              aria-label="Search products"
            />
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center text-ink hover:text-bronze"
              aria-label="Close search"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-taupe">
            {query.trim() ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Popular right now'}
          </p>

          {results.length > 0 ? (
            <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-4">
              {results.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-sand">
                    <img
                      data-strk-img-id={`search-${product.imgIds.main}`}
                      data-strk-img={`[${product.textIds.tagline}] [${product.textIds.name}] gold jewelry product photo, editorial`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                    {product.name}
                  </p>
                  <p className="mt-0.5 text-xs text-taupe">{formatPrice(product.price)}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-6 font-serif text-xl font-light italic text-taupe">
              Nothing found for “{query}” — try “earrings”, “huggies” or “necklace”.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
