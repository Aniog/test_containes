import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, materials } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const searchQuery = searchParams.get('search') || '';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
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
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery]);

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
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 120 || searchQuery;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs tracking-[2px] text-[#C5A46E]">DISCOVER</span>
          <h1 className="font-serif text-3xl tracking-[1px]">The Collection</h1>
        </div>
        
        {/* Sort */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          <span className="text-[#9A9590]">SORT</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">A–Z</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* FILTER SIDEBAR */}
        <aside className="lg:w-56 flex-shrink-0">
          {/* Mobile filter toggle */}
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="lg:hidden w-full mb-4 py-2 border border-[#EDE9E3] text-sm tracking-[1px]"
          >
            {isMobileFiltersOpen ? 'HIDE FILTERS' : 'SHOW FILTERS'}
          </button>

          <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
            {/* Active Filters */}
            {hasActiveFilters && (
              <div>
                <button 
                  onClick={clearFilters}
                  className="text-xs tracking-[1.5px] text-[#C5A46E] hover:underline"
                >
                  CLEAR ALL FILTERS
                </button>
              </div>
            )}

            {/* Category */}
            <div>
              <div className="filter-label mb-3 text-[#9A9590]">Category</div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#C5A46E]"
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <div className="filter-label mb-3 text-[#9A9590]">Material</div>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#C5A46E]"
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <div className="filter-label mb-3 text-[#9A9590]">Price Range</div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span className="text-[#EDE9E3]">—</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#C5A46E]"
                />
              </div>
            </div>

            <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
              RESET FILTERS
            </Button>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          {searchQuery && (
            <p className="mb-4 text-sm text-[#4A4640]">Showing results for "{searchQuery}"</p>
          )}
          
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[#4A4640] mb-4">No products match your filters.</p>
              <Button variant="outline" onClick={clearFilters}>CLEAR FILTERS</Button>
            </div>
          ) : (
            <>
              <p className="text-xs tracking-[1.5px] text-[#9A9590] mb-6">{filteredProducts.length} PRODUCTS</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
