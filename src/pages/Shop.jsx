import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Shop = ({ products }) => {
  const [filters, setFilters] = useState({
    categories: [],
    materials: [],
    priceRange: [0, 120]
  });
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => {
      const catMatch = filters.categories.length === 0 || filters.categories.includes(p.category);
      const matMatch = filters.materials.length === 0 || filters.materials.includes(p.material);
      const priceMatch = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
      return catMatch && matMatch && priceMatch;
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

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="py-12 text-center border-b border-[#E5DFD3]">
          <div className="uppercase text-xs tracking-[0.2em] text-[#B8976F] mb-2">Discover</div>
          <h1 className="serif text-5xl tracking-[0.05em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-10">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-between py-3 border-b border-[#E5DFD3] mb-4"
            >
              <span className="uppercase text-sm tracking-[0.1em]">Filters</span>
              <ChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} size={18} />
            </button>

            <div className={`space-y-8 ${showFilters || 'hidden lg:block'}`}>
              {/* Category */}
              <div>
                <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B8976F]">Category</div>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 py-1.5 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      className="filter-checkbox"
                      checked={filters.categories.includes(cat)}
                      onChange={() => toggleFilter('categories', cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div>
                <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B8976F]">Material</div>
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-3 py-1.5 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      className="filter-checkbox"
                      checked={filters.materials.includes(mat)}
                      onChange={() => toggleFilter('materials', mat)}
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B8976F]">Price</div>
                <div className="text-sm text-[#6B665F]">
                  ${filters.priceRange[0]} — ${filters.priceRange[1]}
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters(prev => ({...prev, priceRange: [0, parseInt(e.target.value)]}))}
                  className="w-full accent-[#B8976F] mt-2"
                />
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD3]">
              <div className="text-sm text-[#6B665F]">{filteredProducts.length} products</div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border border-[#E5DFD3] px-4 py-2 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A — Z</option>
              </select>
            </div>

            {/* Grid */}
            <div className="product-grid grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
                  <div className="relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <img 
                      src={product.image2} 
                      alt={product.name}
                      className="secondary absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="product-name text-sm tracking-[0.1em] mb-1 pr-8">{product.name}</div>
                    <div className="price">${product.price}</div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
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
