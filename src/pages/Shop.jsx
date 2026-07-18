import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategories, setSelectedCategories] = useState(initialCategory !== 'all' ? [initialCategory] : []);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['earrings', 'necklaces', 'huggies'];
  const materials = ['gold', 'silver'];

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
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <span className="text-xs tracking-[0.2em] text-[#c5a26f]">DISCOVER</span>
        <h1 className="serif text-5xl mt-2">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Categories */}
            <div>
              <div className="filter-label">Category</div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm capitalize">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#1a1816]"
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
                  <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm capitalize">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#1a1816]"
                    />
                    {mat} Tone
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <div className="filter-label">Price Range</div>
              <div className="space-y-3">
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#1a1816]"
                />
                <div className="flex justify-between text-sm text-[#6b665f]">
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
              className="text-xs tracking-wide underline text-[#6b665f] hover:text-[#1a1816]"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b">
            <p className="text-sm text-[#6b665f]">{filteredProducts.length} products</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#6b665f]">Sort:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A - Z</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#6b665f]">No products match your filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedMaterials([]);
                  setPriceRange([0, 120]);
                }}
                className="btn btn-outline mt-6"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;