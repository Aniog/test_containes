import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../shop/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam ? [categoryParam] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 150]);

  const categories = [
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Gift Sets' }
  ];

  const materials = [
    { id: 'gold', name: 'Gold Tone' },
    { id: 'silver', name: 'Silver Tone' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by material
    if (selectedMaterials.length > 0) {
      result = result.filter(p => 
        p.variants.some(v => selectedMaterials.includes(v))
      );
    }

    // Filter by price
    result = result.filter(p => 
      p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For demo, just reverse
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleMaterial = (materialId) => {
    setSelectedMaterials(prev => 
      prev.includes(materialId)
        ? prev.filter(m => m !== materialId)
        : [...prev, materialId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 150]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedMaterials.length > 0 || 
    priceRange[0] > 0 || 
    priceRange[1] < 150;

  return (
    <div className="min-h-screen bg-charcoal pt-24 pb-20">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-ivory text-section-mobile md:text-section mb-4">
            Shop All
          </h1>
          <p className="text-warm-gray max-w-md mx-auto">
            Explore our complete collection of premium demi-fine jewelry.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone/30">
          {/* Filter Toggle (Mobile) */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-ivory text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal size={16} />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-gold rounded-full" />
            )}
          </button>

          {/* Results Count */}
          <p className="text-sm text-warm-gray hidden md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-stone text-ivory text-sm px-4 py-2 pr-10 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id} className="bg-charcoal">
                  {option.name}
                </option>
              ))}
            </select>
            <ChevronDown 
              size={16} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" 
            />
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-warm-gray">Active filters:</span>
            {selectedCategories.map(cat => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className="flex items-center gap-1 px-3 py-1 bg-stone/30 text-ivory text-xs uppercase tracking-widest"
              >
                {cat}
                <X size={12} />
              </button>
            ))}
            {selectedMaterials.map(mat => (
              <button
                key={mat}
                onClick={() => toggleMaterial(mat)}
                className="flex items-center gap-1 px-3 py-1 bg-stone/30 text-ivory text-xs uppercase tracking-widest"
              >
                {mat}
                <X size={12} />
              </button>
            ))}
            <button
              onClick={clearFilters}
              className="text-xs text-gold hover:text-ivory transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-serif text-ivory text-lg mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <label 
                      key={category.id} 
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="sr-only"
                      />
                      <span 
                        className={`w-4 h-4 border transition-colors ${
                          selectedCategories.includes(category.id)
                            ? 'bg-gold border-gold'
                            : 'border-stone group-hover:border-gold/50'
                        }`}
                      >
                        {selectedCategories.includes(category.id) && (
                          <span className="block w-full h-full text-charcoal text-xs text-center">✓</span>
                        )}
                      </span>
                      <span className="text-warm-gray group-hover:text-ivory transition-colors">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div>
                <h3 className="font-serif text-ivory text-lg mb-4">Material</h3>
                <div className="space-y-3">
                  {materials.map(material => (
                    <label 
                      key={material.id} 
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material.id)}
                        onChange={() => toggleMaterial(material.id)}
                        className="sr-only"
                      />
                      <span 
                        className={`w-4 h-4 border transition-colors ${
                          selectedMaterials.includes(material.id)
                            ? 'bg-gold border-gold'
                            : 'border-stone group-hover:border-gold/50'
                        }`}
                      >
                        {selectedMaterials.includes(material.id) && (
                          <span className="block w-full h-full text-charcoal text-xs text-center">✓</span>
                        )}
                      </span>
                      <span className="text-warm-gray group-hover:text-ivory transition-colors">
                        {material.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-serif text-ivory text-lg mb-4">Price</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                  <div className="flex items-center justify-between text-sm text-warm-gray">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-warm-gray mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gold hover:text-ivory transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div 
        className={`fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-lg transition-transform duration-300 md:hidden ${
          isFilterOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone/30">
            <h2 className="font-serif text-ivory text-xl">Filters</h2>
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="p-2 text-warm-gray hover:text-ivory"
            >
              <X size={24} />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="font-serif text-ivory text-lg mb-4">Category</h3>
              <div className="space-y-3">
                {categories.map(category => (
                  <label 
                    key={category.id} 
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="sr-only"
                    />
                    <span 
                      className={`w-4 h-4 border ${
                        selectedCategories.includes(category.id)
                          ? 'bg-gold border-gold'
                          : 'border-stone'
                      }`}
                    />
                    <span className="text-warm-gray">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div>
              <h3 className="font-serif text-ivory text-lg mb-4">Material</h3>
              <div className="space-y-3">
                {materials.map(material => (
                  <label 
                    key={material.id} 
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(material.id)}
                      onChange={() => toggleMaterial(material.id)}
                      className="sr-only"
                    />
                    <span 
                      className={`w-4 h-4 border ${
                        selectedMaterials.includes(material.id)
                          ? 'bg-gold border-gold'
                          : 'border-stone'
                      }`}
                    />
                    <span className="text-warm-gray">{material.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-stone/30 flex gap-3">
            <button
              onClick={clearFilters}
              className="flex-1 py-3 border border-stone text-ivory text-sm uppercase tracking-widest"
            >
              Clear
            </button>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="flex-1 py-3 bg-gold text-charcoal text-sm uppercase tracking-widest"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;