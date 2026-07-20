import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [selectedCategories, setSelectedCategories] = useState(initialCategory ? [initialCategory] : []);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
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

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="py-12 text-center border-b border-[#D4CFC6]">
          <div className="uppercase tracking-[0.2em] text-xs text-[#6B665F] mb-2">Discover</div>
          <h1 className="serif text-5xl">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <span className="uppercase tracking-[0.15em] text-sm">Filters</span>
                <button onClick={clearFilters} className="text-xs underline text-[#6B665F]">Clear all</button>
              </div>

              {/* Mobile filter toggle */}
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden w-full flex items-center justify-between py-3 border-b border-[#D4CFC6] mb-4"
              >
                <span>Show Filters</span>
                <ChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} size={18} />
              </button>

              <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-8`}>
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
                          className="accent-[#B89778]"
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
                      <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                        <input 
                          type="checkbox" 
                          checked={selectedMaterials.includes(mat)}
                          onChange={() => toggleMaterial(mat)}
                          className="accent-[#B89778]"
                        />
                        {mat}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <div className="filter-label mb-4">Price Range</div>
                  <div className="flex items-center gap-3 text-sm">
                    <input 
                      type="number" 
                      value={priceRange[0]} 
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="input w-20 py-1.5 text-center"
                    />
                    <span className="text-[#6B665F]">to</span>
                    <input 
                      type="number" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                      className="input w-20 py-1.5 text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D4CFC6]">
              <span className="text-sm text-[#6B665F]">{filteredProducts.length} products</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-[#D4CFC6] px-4 py-2 text-sm focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B665F]">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-sm underline">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;