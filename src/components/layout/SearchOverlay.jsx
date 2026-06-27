import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { cn } from '@/lib/utils';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
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
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const results = query.trim().length === 0
    ? []
    : PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }).slice(0, 6);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length === 0) return;
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
    onClose();
  };

  const handlePick = (product) => {
    navigate(`/product/${product.id}`);
    onClose();
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-[65] transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={cn(
          'absolute top-0 left-0 right-0 bg-cream shadow-velmora-lg transition-transform duration-300 ease-out',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-8 md:py-10">
          <form onSubmit={handleSubmit} className="flex items-center gap-4 border-b border-ink pb-4">
            <Search className="w-5 h-5 text-muted" strokeWidth={1.25} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for earrings, necklaces, huggies…"
              className="flex-1 bg-transparent border-none outline-none font-serif text-2xl md:text-3xl text-ink placeholder:text-muted placeholder:font-serif placeholder:italic"
            />
            <button
              type="button"
              aria-label="Close search"
              className="p-2 -mr-2 text-ink hover:text-charcoal"
              onClick={onClose}
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </form>

          <div className="mt-8 min-h-[180px]">
            {query.trim().length === 0 ? (
              <div>
                <p className="label-light mb-5">Popular searches</p>
                <div className="flex flex-wrap gap-2">
                  {['Earrings', 'Necklaces', 'Huggies', 'Gold', 'Crystal', 'Gift Sets'].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 border border-hairline text-sm text-charcoal hover:border-ink hover:text-ink transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <p className="text-sm text-muted py-12">
                No matches for "{query}". Try a broader term.
              </p>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                {results.map((product) => (
                  <li key={product.id}>
                    <button
                      type="button"
                      onClick={() => handlePick(product)}
                      className="w-full text-left flex items-center gap-4 group py-2"
                    >
                      <span className="w-12 h-14 bg-sand overflow-hidden flex-shrink-0">
                        <img
                          alt=""
                          data-strk-img-id={`search-${product.id}`}
                          data-strk-img={`[search-${product.id}-name]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="120"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                      </span>
                      <span className="flex-1">
                        <span className="product-name text-[0.7rem] block group-hover:text-charcoal" id={`search-${product.id}-name`}>
                          {product.name}
                        </span>
                        <span className="text-sm text-muted">${product.price}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}