import { useState } from 'react';
import { X, Search } from 'lucide-react';
import { products } from '@/data/products';
import { useNavigate } from 'react-router-dom';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const results = query.length > 1
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (product) => {
    navigate(`/product/${product.id}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-0 left-0 right-0 bg-stone-50 shadow-xl slide-up">
        <div className="container-wide py-4">
          <div className="flex items-center gap-4">
            <Search size={20} className="text-stone-400 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewelry..."
              className="flex-1 bg-transparent text-stone-900 placeholder-stone-400 outline-none text-lg serif-heading"
              autoFocus
            />
            <button onClick={onClose} className="p-2 hover:text-amber-700 transition-colors">
              <X size={20} />
            </button>
          </div>

          {results.length > 0 && (
            <div className="mt-4 border-t border-stone-200 pt-4 space-y-3 max-h-80 overflow-y-auto">
              {results.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className="flex items-center gap-4 w-full p-3 hover:bg-stone-100 rounded transition-colors text-left"
                >
                  <div className="w-12 h-12 bg-stone-200 flex-shrink-0" />
                  <div>
                    <p className="product-name text-sm text-stone-900">{product.name}</p>
                    <p className="text-xs text-stone-500">${product.price}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {query.length > 1 && results.length === 0 && (
            <p className="mt-4 text-sm text-stone-500 text-center">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}
