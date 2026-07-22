import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const Shop = ({ products, addToCart, searchQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    const query = searchQuery?.toLowerCase() || '';
    if (query) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

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
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [products, searchQuery, selectedCategories, selectedMaterials, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleMaterial = (mat) => {
    if (selectedMaterials.includes(mat)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== mat));
    } else {
      setSelectedMaterials([...selectedMaterials, mat]);
    }
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="text-xs tracking-[0.2em] text-[#8A847D] uppercase">Discover</span>
          <h1 className="serif text-5xl mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-between py-3 border-b mb-4"
            >
              <span className="tracking-[0.1em] text-sm">Filters</span>
              <ChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} size={18} />
            </button>

            <div className={`space-y-8 ${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden lg:block'}`}>
              {/* Categories */}
              <div>
                <div className="filter-label">Category</div>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
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
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
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
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-xs text-[#8A847D] mt-1">
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
                  setSearchParams({});
                }}
                className="text-xs tracking-[0.1em] uppercase underline"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b">
              <span className="text-sm text-[#8A847D]">{filteredProducts.length} pieces</span>
              
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5E0D8] px-4 py-2 bg-white focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Sort: Highest Rated</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#8A847D]">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;