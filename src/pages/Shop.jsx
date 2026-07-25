import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { allProducts, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/ui/Button';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const urlCategory = searchParams.get('category');
  const urlSearch = searchParams.get('search')?.toLowerCase() || '';

  // Initialize from URL
  React.useEffect(() => {
    if (urlCategory && !selectedCategories.includes(urlCategory)) {
      setSelectedCategories([urlCategory]);
    }
  }, [urlCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Search filter
    if (urlSearch) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(urlSearch) || 
        p.description.toLowerCase().includes(urlSearch) ||
        p.category.toLowerCase().includes(urlSearch)
      );
    }

    // Category filter
    const activeCategories = urlCategory && selectedCategories.length === 0 
      ? [urlCategory] 
      : selectedCategories;
    
    if (activeCategories.length > 0) {
      result = result.filter(p => activeCategories.includes(p.category));
    }

    // Material filter (simplified - check if product material includes selected)
    if (selectedMaterials.length > 0) {
      result = result.filter(p => 
        selectedMaterials.some(m => p.material?.includes(m.split(' ')[0]))
      );
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
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
        // featured - keep original order or sort by rating
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [urlSearch, urlCategory, selectedCategories, selectedMaterials, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) 
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 120;

  return (
    <div className="min-h-screen bg-[#F7F3EB] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <span className="filter-label">Discover</span>
            <h1 className="font-serif text-4xl text-[#1C1B19]">The Collection</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[#E5DFD3] px-4 py-2 pr-10 text-sm tracking-[0.5px] focus:outline-none focus:border-[#C5A46E]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6259] pointer-events-none" />
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden px-4 py-2 border border-[#E5DFD3] text-sm tracking-[0.5px]"
            >
              FILTERS
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`w-full md:w-56 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8 bg-white p-6 md:p-0 md:bg-transparent">
              <div className="flex items-center justify-between">
                <span className="filter-label">Filters</span>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-[#C5A46E] tracking-[1px]">CLEAR ALL</button>
                )}
              </div>

              {/* Category */}
              <div>
                <div className="filter-label mb-3">Category</div>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat) || (urlCategory === cat && selectedCategories.length === 0)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#C5A46E]"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label mb-3">Price Range</div>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C5A46E]"
                  />
                  <div className="flex justify-between text-sm text-[#6B6259]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label mb-3">Material</div>
                <div className="space-y-2 text-sm">
                  {['18K Gold Plated Brass', '18K Gold Plated Sterling Silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => {
                          setSelectedMaterials(prev => 
                            prev.includes(mat) 
                              ? prev.filter(m => m !== mat)
                              : [...prev, mat]
                          );
                        }}
                        className="accent-[#C5A46E]"
                      />
                      <span>{mat.replace('18K Gold Plated ', '')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5DFD3] text-xs text-[#6B6259]">
                Showing {filteredProducts.length} of {allProducts.length} pieces
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="shop-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-[#6B6259] mb-4">No pieces match your filters.</p>
                <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}