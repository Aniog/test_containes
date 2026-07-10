import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Filter by material
    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material === activeMaterial);
    }
    
    // Sort
    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }
    
    return result;
  }, [activeCategory, activeMaterial, activeSort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all';

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-caption uppercase tracking-widest mb-4">Category</h3>
        <div className="space-y-3">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={`block text-left text-small ${
              activeCategory === 'all' ? 'text-secondary font-medium' : 'text-secondary-text hover:text-secondary'
            }`}
          >
            All Products
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`block text-left text-small capitalize ${
                activeCategory === cat.id ? 'text-secondary font-medium' : 'text-secondary-text hover:text-secondary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div className="mb-8">
        <h3 className="text-caption uppercase tracking-widest mb-4">Material</h3>
        <div className="space-y-3">
          {['gold', 'silver'].map(material => (
            <button
              key={material}
              onClick={() => updateFilter('material', material)}
              className={`block text-left text-small capitalize ${
                activeMaterial === material ? 'text-secondary font-medium' : 'text-secondary-text hover:text-secondary'
              }`}
            >
              {material}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-caption uppercase tracking-widest mb-4">Price</h3>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under-50', label: 'Under $50' },
            { value: '50-75', label: '$50 - $75' },
            { value: 'over-75', label: 'Over $75' }
          ].map(price => (
            <button
              key={price.value}
              className="block text-left text-small text-secondary-text hover:text-secondary"
            >
              {price.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-small text-accent hover:text-accent-hover transition-smooth"
        >
          Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <main className="min-h-screen pt-20">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-h2 text-secondary">
            {activeCategory === 'all' ? 'Shop All' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-secondary-text mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-small font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-divider px-4 py-2 pr-10 text-small focus:outline-none focus:border-secondary"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-secondary-text mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-accent hover:text-accent-hover"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <div
          className={`fixed inset-0 z-50 lg:hidden ${
            isFilterOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-secondary/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 h-full w-80 max-w-full bg-primary shadow-elevated transform transition-transform duration-300 ${
              isFilterOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-divider">
              <h2 className="font-serif text-h4">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-[calc(100%-64px)]">
              <FilterContent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}