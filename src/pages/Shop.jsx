import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    category: [],
    material: [],
    priceRange: null
  });
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => {
      if (filters.category.length && !filters.category.includes(p.category)) return false;
      if (filters.material.length && !filters.material.includes(p.material)) return false;
      if (filters.priceRange) {
        if (filters.priceRange === 'under50' && p.price >= 50) return false;
        if (filters.priceRange === '50to80' && (p.price < 50 || p.price > 80)) return false;
        if (filters.priceRange === 'over80' && p.price <= 80) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
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

  const setPriceFilter = (range) => {
    setFilters(prev => ({
      ...prev,
      priceRange: prev.priceRange === range ? null : range
    }));
  };

  const clearFilters = () => {
    setFilters({ category: [], material: [], priceRange: null });
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-2">Discover</p>
            <h1 className="serif text-5xl">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden text-sm tracking-wider"
            >
              Filters
            </button>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5E0D8] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs tracking-[0.15em] uppercase">Category</p>
                  {(filters.category.length > 0 || filters.material.length > 0 || filters.priceRange) && (
                    <button onClick={clearFilters} className="text-xs text-[#C5A46E]">Clear</button>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={filters.category.includes(cat)}
                        onChange={() => toggleFilter('category', cat)}
                        className="accent-[#C5A46E]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-4">Material</p>
                <div className="space-y-2 text-sm">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={filters.material.includes(mat)}
                        onChange={() => toggleFilter('material', mat)}
                        className="accent-[#C5A46E]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-4">Price</p>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Under $50', value: 'under50' },
                    { label: '$50 – $80', value: '50to80' },
                    { label: 'Over $80', value: 'over80' }
                  ].map(range => (
                    <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        checked={filters.priceRange === range.value}
                        onChange={() => setPriceFilter(range.value)}
                        className="accent-[#C5A46E]"
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8B7E74] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card group">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#FAF8F4] overflow-hidden">
                      <img 
                        src={product.images.primary} 
                        alt={product.name}
                        className="primary absolute inset-0 w-full h-full object-cover"
                      />
                      <img 
                        src={product.images.secondary} 
                        alt={product.name}
                        className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
                      />
                    </Link>
                    <div className="p-5">
                      <Link to={`/product/${product.id}`}>
                        <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                      </Link>
                      <p className="text-[#8B7E74] text-sm mb-4">${product.price}</p>
                      <button 
                        onClick={() => addToCart(product)}
                        className="quick-add btn btn-primary w-full text-xs py-3"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;