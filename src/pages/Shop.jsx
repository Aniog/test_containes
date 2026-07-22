import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryParam = searchParams.get('category');
  const materialParam = searchParams.get('material');
  const sortParam = searchParams.get('sort');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState(materialParam || 'all');
  const [selectedSort, setSelectedSort] = useState(sortParam || 'featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    // Sort
    switch (selectedSort) {
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
  }, [selectedCategory, selectedMaterial, selectedSort]);

  const updateFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    updateFilters('category', category);
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterial(material);
    updateFilters('material', material);
  };

  const handleSortChange = (sort) => {
    setSelectedSort(sort);
    updateFilters('sort', sort);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSelectedSort('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all';

  return (
    <main className="pb-16">
      <div className="container-main">
        {/* Page Header */}
        <div className="py-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl">Shop All</h1>
          <p className="mt-4 text-velmora-warm-gray">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between py-4 border-b border-velmora-border mb-8">
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal size={18} />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-velmora-gold rounded-full" />
            )}
          </button>

          {/* Results Count */}
          <p className="text-sm text-velmora-warm-gray hidden lg:block">
            {filteredProducts.length} products
          </p>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="appearance-none bg-transparent pr-8 py-2 text-sm focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Category</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'all'}
                    onChange={() => handleCategoryChange('all')}
                    className="w-4 h-4 accent-velmora-gold"
                  />
                  <span className="text-sm text-velmora-warm-gray">All</span>
                </label>
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                      className="w-4 h-4 accent-velmora-gold"
                    />
                    <span className="text-sm text-velmora-warm-gray capitalize">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Material</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === 'all'}
                    onChange={() => handleMaterialChange('all')}
                    className="w-4 h-4 accent-velmora-gold"
                  />
                  <span className="text-sm text-velmora-warm-gray">All</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === 'gold'}
                    onChange={() => handleMaterialChange('gold')}
                    className="w-4 h-4 accent-velmora-gold"
                  />
                  <span className="text-sm text-velmora-warm-gray">Gold</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === 'silver'}
                    onChange={() => handleMaterialChange('silver')}
                    className="w-4 h-4 accent-velmora-gold"
                  />
                  <span className="text-sm text-velmora-warm-gray">Silver</span>
                </label>
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-warm-gray mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-secondary text-sm">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div 
            className="fixed inset-0 bg-velmora-charcoal/50 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-full bg-velmora-cream z-50 lg:hidden overflow-y-auto animate-slide-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === 'all'}
                      onChange={() => handleCategoryChange('all')}
                      className="w-4 h-4 accent-velmora-gold"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedCategory === cat.id}
                        onChange={() => handleCategoryChange(cat.id)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="text-sm capitalize">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Material</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => handleMaterialChange('all')}
                      className="w-4 h-4 accent-velmora-gold"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-material"
                      checked={selectedMaterial === 'gold'}
                      onChange={() => handleMaterialChange('gold')}
                      className="w-4 h-4 accent-velmora-gold"
                    />
                    <span className="text-sm">Gold</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-material"
                      checked={selectedMaterial === 'silver'}
                      onChange={() => handleMaterialChange('silver')}
                      className="w-4 h-4 accent-velmora-gold"
                    />
                    <span className="text-sm">Silver</span>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button 
                  onClick={clearFilters}
                  className="btn-secondary flex-1 text-sm"
                >
                  Clear
                </button>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="btn-primary flex-1 text-sm"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
