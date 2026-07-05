import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

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

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-[#E5DDD3] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 py-10">
          <div className="text-xs tracking-[0.2em] text-[#C5A26F] mb-2">DISCOVER</div>
          <h1 className="serif text-5xl tracking-[0.05em]">The Collection</h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-between py-3 border-b border-[#E5DDD3] mb-4"
            >
              <span className="text-sm tracking-[0.1em]">FILTERS</span>
              <ChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} size={18} />
            </button>

            <div className={`space-y-8 ${showFilters || 'hidden lg:block'}`}>
              {/* Category */}
              <div>
                <div className="text-xs tracking-[0.15em] mb-4 text-[#C5A26F]">CATEGORY</div>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#C5A26F]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="text-xs tracking-[0.15em] mb-4 text-[#C5A26F]">MATERIAL</div>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#C5A26F]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="text-xs tracking-[0.15em] mb-4 text-[#C5A26F]">PRICE RANGE</div>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C5A26F]"
                  />
                  <div className="flex justify-between text-sm text-[#5C524C]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedMaterials([]);
                  setPriceRange([0, 120]);
                }}
                className="text-xs tracking-[0.1em] text-[#8A7F75] hover:text-[#2C2522]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DDD3]">
              <div className="text-sm text-[#5C524C]">
                {filteredProducts.length} PRODUCTS
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.1em] text-[#8A7F75]">SORT BY</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-[#E5DDD3] px-4 py-2 text-sm focus:outline-none focus:border-[#C5A26F]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#8A7F75]">No products match your filters.</p>
                <button 
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedMaterials([]);
                    setPriceRange([0, 120]);
                  }}
                  className="mt-4 text-sm tracking-[0.1em] text-[#C5A26F]"
                >
                  CLEAR FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;