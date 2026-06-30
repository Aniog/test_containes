import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  let filteredProducts = [...products];

  // Apply filters
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedCategories.includes(p.category));
  }
  if (selectedMaterials.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedMaterials.includes(p.material));
  }
  filteredProducts = filteredProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  // Apply sort
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="py-8">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</div>
          <h1 className="font-serif text-5xl tracking-[0.05em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="text-xs tracking-[0.15em] uppercase">Filters</div>
                {(selectedCategories.length > 0 || selectedMaterials.length > 0) && (
                  <button onClick={clearFilters} className="text-xs underline text-[#8B7355]">Clear All</button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <div className="filter-label">Category</div>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2.5 py-1.5 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#8B7355]"
                    />
                    {cat}
                  </label>
                ))}
              </div>

              {/* Material */}
              <div className="mb-8">
                <div className="filter-label">Material</div>
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-2.5 py-1.5 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#8B7355]"
                    />
                    {mat}
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="text-sm text-[#6B665E] mb-2">${priceRange[0]} — ${priceRange[1]}</div>
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#8B7355]"
                />
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD4]">
              <div className="text-sm text-[#6B665E]">{filteredProducts.length} products</div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5DFD4] px-4 py-2 bg-white focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-[#6B665E]">
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