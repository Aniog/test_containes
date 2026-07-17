import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const filteredProducts = query.length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/40" onClick={handleClose} />
      
      <div className="relative w-full max-w-lg bg-[var(--color-surface)] shadow-xl">
        <div className="flex items-center border-b border-[var(--color-border)] px-4">
          <Search size={18} className="text-[var(--color-text-muted)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jewelry..."
            className="flex-1 px-3 py-4 bg-transparent focus:outline-none text-sm"
            autoFocus
          />
          <button onClick={handleClose} className="p-1">
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.length > 1 && filteredProducts.length === 0 && (
            <div className="p-8 text-center text-sm text-[var(--color-text-muted)]">
              No results for "{query}"
            </div>
          )}

          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={handleClose}
              className="flex gap-4 p-4 hover:bg-[var(--color-bg-alt)] border-b border-[var(--color-border-light)] last:border-b-0"
            >
              <div className="w-16 h-16 bg-[var(--color-bg-alt)] flex-shrink-0">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 py-1">
                <p className="product-name text-xs tracking-[0.15em]">{product.name}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{product.shortDescription}</p>
                <p className="text-sm font-medium mt-1">${product.price}</p>
              </div>
            </Link>
          ))}

          {query.length <= 1 && (
            <div className="p-8 text-center text-xs text-[var(--color-text-muted)] tracking-[0.1em]">
              Start typing to search our collection
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
