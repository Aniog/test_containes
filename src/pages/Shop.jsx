import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = ({ onCartClick }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange([0, 120]);
    setSortBy('featured');
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="py-12 text-center border-b border-[#E5E1D9]">
          <span className="text-xs tracking-[0.15em] text-[#B89778] uppercase">Discover</span>
          <h1 className="font-serif text-5xl tracking-[0.02em] mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.12em] uppercase">Filters</span>
                <button onClick={resetFilters} className="text-xs text-[#B89778] hover:underline">Reset</button>
              </div>

              {/* Category */}
              <div className="mb-8">
                <div className="filter-label">Category</div>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="accent-[#B89778]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <div className="filter-label">Material</div>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="accent-[#B89778]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="flex items-center gap-3 text-sm">
                  <span>${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1 accent-[#B89778]"
                  />
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E1D9]">
              <span className="text-sm text-[#6B6763]">{filteredProducts.length} products</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5E1D9] px-4 py-2 bg-white focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onCartClick={onCartClick} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B6763]">No products match your filters.</p>
                <button onClick={resetFilters} className="mt-4 text-sm underline">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;