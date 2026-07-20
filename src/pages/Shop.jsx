import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Shop = ({ addToCart }) => {
  const [filters, setFilters] = useState({
    category: [],
    material: [],
    priceRange: null,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => {
      if (filters.category.length && !filters.category.includes(p.category)) return false;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (p.price < min || p.price > max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value) 
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  const clearFilters = () => {
    setFilters({ category: [], material: [], priceRange: null });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="uppercase text-xs tracking-[0.2em] text-[#B89778] mb-2">Discover</div>
        <h1 className="font-serif text-5xl tracking-[0.02em]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <button onClick={() => setShowFilters(!showFilters)} className="uppercase text-sm tracking-wider">
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-3 py-1.5 bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className={`${showFilters || 'hidden lg:block'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="uppercase text-xs tracking-[0.15em]">Filters</div>
              {(filters.category.length || filters.priceRange) && (
                <button onClick={clearFilters} className="text-xs text-[#B89778]">Clear All</button>
              )}
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="uppercase text-xs tracking-[0.1em] mb-3 text-[#6B665F]">Category</div>
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-3 py-1.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.category.includes(cat)}
                    onChange={() => toggleFilter('category', cat)}
                    className="accent-[#B89778]"
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>

            {/* Price Filter */}
            <div>
              <div className="uppercase text-xs tracking-[0.1em] mb-3 text-[#6B665F]">Price</div>
              {[
                [0, 50], [50, 80], [80, 150]
              ].map((range, idx) => (
                <label key={idx} className="flex items-center gap-3 py-1.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price"
                    checked={filters.priceRange?.[0] === range[0]}
                    onChange={() => setFilters(prev => ({ ...prev, priceRange: range }))}
                    className="accent-[#B89778]"
                  />
                  <span className="text-sm">${range[0]} — ${range[1]}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden lg:flex justify-end mb-6">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Sort: Price Low to High</option>
              <option value="price-high">Sort: Price High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block image-hover aspect-[4/3] bg-[#F8F5F1] mb-4 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product, 'Gold'); }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-gold text-xs opacity-0 group-hover:opacity-100 transition-all"
                  >
                    Quick Add
                  </button>
                </Link>
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
                  <div className="text-sm text-[#6B665F]">${product.price}</div>
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-[#6B665F]">No products match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;