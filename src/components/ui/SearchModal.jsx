import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim()
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

  return (
    <div className="search-modal" role="dialog" aria-label="Search products">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-[#6B645C]">
            <Search className="w-5 h-5" />
            <span className="text-sm tracking-[0.08em] uppercase">Search</span>
          </div>
          <button onClick={handleClose} className="p-2 -mr-2 text-[#6B645C] hover:text-[#2C2825]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <input
          type="text"
          className="search-input"
          placeholder="Search our collection..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        {query.trim() && (
          <div className="mt-8">
            {filteredProducts.length > 0 ? (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={handleClose}
                    className="flex gap-4 p-3 -mx-3 rounded hover:bg-[#F1EDE6] transition-colors"
                  >
                    <div className="w-16 h-16 bg-[#F1EDE6] flex-shrink-0">
                      <img
                        src={product.images.primary}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm tracking-[0.04em] uppercase mb-1">
                        {product.name}
                      </h4>
                      <p className="text-sm text-[#6B645C]">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-[#6B645C] text-sm">No results found for "{query}"</p>
            )}
          </div>
        )}

        <p className="mt-8 text-xs text-[#8A8178] tracking-[0.04em]">
          Press ESC to close
        </p>
      </div>
    </div>
  );
};

export default SearchModal;