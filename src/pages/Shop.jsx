import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const Shop = ({ products, onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

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
  }, [products, selectedCategories, priceRange, selectedMaterials, sortBy]);

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
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
      <div className="mb-12">
        <div className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] mb-2">DISCOVER</div>
        <h1 className="serif text-5xl">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-10">
            {/* Categories */}
            <div>
              <div className="filter-label">Category</div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[var(--color-accent)]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="filter-label">Price Range</div>
              <div className="space-y-3">
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[var(--color-accent)]"
                />
                <div className="flex justify-between text-sm text-[var(--color-text-muted)]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Material */}
            <div>
              <div className="filter-label">Material</div>
              <div className="space-y-2">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[var(--color-accent)]"
                    />
                    {mat}
                  </label>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange([0, 120]);
                setSelectedMaterials([]);
              }}
              className="text-xs tracking-[0.1em] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[var(--color-border)]">
            <span className="text-sm text-[var(--color-text-muted)]">
              {filteredProducts.length} products
            </span>
            
            <div className="relative">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 text-sm tracking-[0.05em] cursor-pointer focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rated</option>
              </select>
              <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-[var(--color-text-muted)]">No products match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;