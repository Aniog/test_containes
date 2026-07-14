import React, { useState } from 'react';
import { X } from 'lucide-react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.length > 1 
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  return (
    <div className="search-modal">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)]">Search</span>
          <button onClick={handleClose} aria-label="Close search">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <input
          type="text"
          className="search-input"
          placeholder="Search jewelry..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        {query.length > 1 && (
          <div className="mt-6 max-h-[400px] overflow-y-auto">
            {filteredProducts.length > 0 ? (
              <div className="space-y-4">
                {filteredProducts.map(product => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.slug}`}
                    onClick={handleClose}
                    className="flex gap-4 items-center p-2 hover:bg-[var(--velmora-surface-warm)] -mx-2 rounded"
                  >
                    <div className="w-16 h-16 bg-[var(--velmora-surface-warm)] flex-shrink-0">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="product-name text-sm">{product.name}</div>
                      <div className="text-xs text-[var(--velmora-text-muted)]">{product.category} • ${product.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-[var(--velmora-text-muted)] py-4">No results found for "{query}"</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;