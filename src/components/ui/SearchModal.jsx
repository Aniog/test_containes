import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const filteredProducts = query.length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-[#F8F5F0] rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center border-b border-[#E5E0D8] px-6">
          <Search className="h-5 w-5 text-[#8B8178]" />
          <input
            type="text"
            placeholder="Search jewelry..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent px-4 py-5 text-lg placeholder:text-[#8B8178] focus:outline-none"
            autoFocus
          />
          <button onClick={handleClose} className="p-2">
            <X className="h-5 w-5 text-[#4A4640]" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.length > 1 && filteredProducts.length > 0 && (
            <div className="p-2">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  onClick={handleClose}
                  className="flex items-center gap-4 p-4 hover:bg-white rounded transition-colors"
                >
                  <div className="w-16 h-16 bg-[#E5E0D8] rounded overflow-hidden flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif uppercase tracking-[1.5px] text-sm text-[#1A1A1A]">{product.name}</p>
                    <p className="text-xs text-[#8B8178] mt-0.5">{product.category} · ${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {query.length > 1 && filteredProducts.length === 0 && (
            <div className="p-12 text-center text-[#8B8178]">
              No results found for "{query}"
            </div>
          )}

          {query.length <= 1 && (
            <div className="p-8 text-center text-[#8B8178] text-sm">
              Search our collection of earrings, necklaces, and huggies.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
