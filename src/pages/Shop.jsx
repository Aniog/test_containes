import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = ({ products, addToCart }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = products
    .filter(p => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // featured
    });

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="py-12 text-center border-b border-[#E5DFD3]">
          <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-2">DISCOVER OUR COLLECTION</div>
          <h1 className="font-serif text-5xl tracking-[0.05em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 pt-10">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full mb-4 py-2 border border-[#E5DFD3] text-sm tracking-[0.1em]"
            >
              {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
            </button>

            <div className={`space-y-8 ${showFilters || 'hidden lg:block'}`}>
              {/* Categories */}
              <div>
                <div className="filter-label">CATEGORY</div>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B89778]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label">PRICE RANGE</div>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B89778]"
                  />
                  <div className="flex justify-between text-sm text-[#6B665F]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">MATERIAL</div>
                <div className="text-sm text-[#6B665F]">18K Gold Plated Brass</div>
              </div>

              <button 
                onClick={() => { setSelectedCategories([]); setPriceRange([0, 120]); }}
                className="text-xs tracking-[0.1em] underline text-[#6B665F] hover:text-[#2C2825]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD3]">
              <div className="text-sm text-[#6B665F]">{filteredProducts.length} products</div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm tracking-[0.05em] border border-[#E5DFD3] px-4 py-2 focus:outline-none"
              >
                <option value="featured">SORT: FEATURED</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
                <option value="name">NAME: A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-[#6B665F]">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;