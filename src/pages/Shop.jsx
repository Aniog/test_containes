import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, materials } from '../data/products';

const Shop = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="text-xs tracking-[0.15em] text-gold mb-2">DISCOVER</div>
        <h1 className="serif text-5xl">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filter Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full flex items-center justify-between py-3 border-b border-divider mb-4"
          >
            <span className="text-sm tracking-[0.05em]">FILTERS</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <div className={`space-y-8 ${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden lg:block'}`}>
            {/* Categories */}
            <div>
              <div className="filter-label">Category</div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-charcoal"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div>
              <div className="filter-label">Material</div>
              <div className="space-y-2">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-charcoal"
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
                  className="w-full accent-charcoal"
                />
                <div className="flex justify-between text-xs text-taupe mt-1">
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
              className="text-xs tracking-[0.1em] text-taupe hover:text-charcoal"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-divider">
            <span className="text-sm text-taupe">{filteredProducts.length} products</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-divider px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-taupe mb-4">No products match your filters.</p>
              <button onClick={() => {
                setSelectedCategories([]);
                setSelectedMaterials([]);
                setPriceRange([0, 120]);
              }} className="btn-outline text-sm">
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;