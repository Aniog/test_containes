import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Select from '@/components/ui/Select';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Material / Tone filter (check against product variants)
    if (selectedMaterials.length > 0) {
      result = result.filter(p => 
        selectedMaterials.some(m => p.variants && p.variants.includes(m))
      );
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
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || searchQuery;

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-[3px] text-[#B89778]">COLLECTION</span>
          <h1 className="font-serif text-5xl tracking-[1px] mt-1">All Jewelry</h1>
          <p className="text-[#6B665F] mt-3 max-w-md">
            Thoughtfully designed pieces for the modern woman. Each one made to be worn, loved, and passed on.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[2px] text-[#B89778]">FILTERS</span>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-[#B89778] hover:underline"
                  >
                    CLEAR ALL
                  </button>
                )}
              </div>

              {/* Search */}
              <div>
                <label className="block text-xs tracking-[2px] mb-2 text-[#6B665F]">SEARCH</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find a piece..."
                  className="w-full h-10 px-4 text-sm border border-[#EDE8E0] bg-white focus:border-[#B89778] focus:outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs tracking-[2px] mb-3 text-[#6B665F]">CATEGORY</label>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B89778]"
                      />
                      <span className="text-sm group-hover:text-[#B89778] transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <label className="block text-xs tracking-[2px] mb-3 text-[#6B665F]">MATERIAL</label>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#B89778]"
                      />
                      <span className="text-sm group-hover:text-[#B89778] transition-colors">{mat} Tone</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-xs tracking-[2px] mb-3 text-[#6B665F]">PRICE RANGE</label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B89778]"
                  />
                  <div className="flex justify-between text-xs text-[#6B665F]">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort + Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EDE8E0]">
              <p className="text-sm text-[#6B665F]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[1.5px] text-[#6B665F]">SORT BY</span>
                <Select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-44 h-9 text-xs"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </Select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B665F] mb-4">No pieces match your filters.</p>
                <button 
                  onClick={clearFilters}
                  className="text-sm tracking-[1.5px] text-[#B89778] hover:underline"
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
