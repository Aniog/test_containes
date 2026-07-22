import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  function handleSearch(e) {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute top-0 left-0 right-0 bg-white shadow-xl">
        <div className="max-w-3xl mx-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl tracking-wider uppercase">Search</h2>
            <button onClick={onClose} className="hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jewelry..."
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 text-lg"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-600"
            >
              <Search size={20} />
            </button>
          </form>
          
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">Popular Searches:</p>
            <div className="flex flex-wrap gap-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gold', 'Gifts'].map(term => (
                <button
                  key={term}
                  onClick={() => {
                    setSearchQuery(term);
                  }}
                  className="px-4 py-2 border border-gray-300 text-sm hover:border-gray-900 hover:text-gray-900 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
