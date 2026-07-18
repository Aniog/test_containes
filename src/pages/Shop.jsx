import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    category: [],
    material: [],
    priceRange: null,
  });
  const [sortBy, setSortBy] = useState('featured');

  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  let filteredProducts = [...products];

  // Apply filters
  if (filters.category.length > 0) {
    filteredProducts = filteredProducts.filter(p => filters.category.includes(p.category));
  }
  if (filters.material.length > 0) {
    filteredProducts = filteredProducts.filter(p => filters.material.includes(p.material));
  }
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
  }

  // Apply sort
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-10">
          <span className="text-xs tracking-[0.2em] text-[#B8976F]">DISCOVER</span>
          <h1 className="serif text-5xl mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filter Sidebar */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <div className="filter-label">Category</div>
                {['Earrings', 'Necklaces', 'Huggies'].map(cat => (
                  <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={filters.category.includes(cat)}
                      onChange={() => toggleFilter('category', cat)}
                      className="accent-[#B8976F]"
                    />
                    {cat}
                  </label>
                ))}
              </div>

              {/* Material Filter */}
              <div>
                <div className="filter-label">Material</div>
                {['Gold', 'Silver'].map(mat => (
                  <label key={mat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={filters.material.includes(mat)}
                      onChange={() => toggleFilter('material', mat)}
                      className="accent-[#B8976F]"
                    />
                    {mat}
                  </label>
                ))}
              </div>

              {/* Price Filter */}
              <div>
                <div className="filter-label">Price</div>
                {[
                  { label: 'Under $50', range: [0, 50] },
                  { label: '$50 – $80', range: [50, 80] },
                  { label: 'Over $80', range: [80, 200] },
                ].map((p, idx) => (
                  <label key={idx} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                    <input 
                      type="radio" 
                      name="price"
                      checked={filters.priceRange?.[0] === p.range[0]}
                      onChange={() => setFilters(prev => ({ ...prev, priceRange: p.range }))}
                      className="accent-[#B8976F]"
                    />
                    {p.label}
                  </label>
                ))}
              </div>

              <button 
                onClick={() => setFilters({ category: [], material: [], priceRange: null })}
                className="text-xs tracking-[0.1em] text-[#6B665F] hover:text-[#2C2823]"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b">
              <span className="text-sm text-[#6B665F]">{filteredProducts.length} products</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5DFD4] px-4 py-2 bg-white focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="velmora-card bg-white group">
                  <Link to={`/product/${product.id}`} className="product-image-container block aspect-[4/3.5] bg-[#F5F1EA] relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image w-full h-full object-cover"
                    />
                    <img 
                      src={product.imageSecondary} 
                      alt={product.name}
                      className="product-image-secondary w-full h-full object-cover"
                    />
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart(product); }}
                      className="quick-add-btn velmora-btn text-xs"
                    >
                      Add to Cart
                    </button>
                  </Link>
                  <div className="p-6">
                    <Link to={`/product/${product.id}`} className="product-name text-sm block hover:text-[#B8976F] transition-colors">
                      {product.name}
                    </Link>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-[#6B665F]">${product.price}</span>
                      <div className="flex text-[#B8976F]">
                        {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;